import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d2pe1nlqh.css';
import '../../css/z/zrf8c72sa.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d2pe1nlqh"/><path class="zrf8c72sa"/></g>`,
		"fallback": "streamline-color:fork-knife",
	});
}

export default Component;
