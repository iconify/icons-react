import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/x0fqjdbmr.css';
import '../../css/h/hwihm5yai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k x0fqjdbmr"/><path class="hwihm5yai wm-a"/></g>`,
		"fallback": "withicons:battery-full-sketch",
	});
}

export default Component;
