import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hbcxszb3z.css';
import '../../css/n/nr4l37b1c.css';
import '../../css/p/pezn3_bhe.css';
import '../../css/a/aa11gz0eb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="hbcxszb3z"/><path class="nr4l37b1c wm-a"/><path class="pezn3_bhe wm-k"/><path class="aa11gz0eb wm-a"/></g>`,
		"fallback": "withicons:bell-concierge-sketch",
	});
}

export default Component;
