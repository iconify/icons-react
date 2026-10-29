import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/ic0jf5bor.css';
import '../../css/u/uq73d1qjn.css';
import '../../css/s/swzt5ac_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ic0jf5bor wm-k"/><path class="uq73d1qjn wm-k"/><path class="swzt5ac_x wm-a"/></g>`,
		"fallback": "withicons:car-sketch",
	});
}

export default Component;
