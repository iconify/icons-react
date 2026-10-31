import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hzhjasret.css';
import '../../css/m/moec6mbkt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="hzhjasret wm-k"/><path class="moec6mbkt wm-a"/></g>`,
		"fallback": "withicons:gallery-horizontal-gloss",
	});
}

export default Component;
