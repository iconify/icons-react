import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/bkvy-pu9k.css';
import '../../css/n/n3402yb9n.css';
import '../../css/h/hehqleh0s.css';
import '../../css/v/vjv-rqbre.css';
import '../../css/r/rasux0b5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="bkvy-pu9k wm-k"/><path class="n3402yb9n wm-a"/><path class="hehqleh0s wm-shadow"/><path class="vjv-rqbre wm-k"/><path class="rasux0b5a wm-a"/></g>`,
		"fallback": "withicons:dollar-sign-engrave",
	});
}

export default Component;
