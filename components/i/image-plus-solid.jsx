import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/dt6uz2nrq.css';
import '../../css/d/dmjkhrbua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="dt6uz2nrq"/><path class="dmjkhrbua wm-s"/></g>`,
		"fallback": "withicons:image-plus-solid",
	});
}

export default Component;
