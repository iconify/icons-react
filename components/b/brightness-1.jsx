import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dpyz5ehgo.css';
import '../../css/c/c3llzibuh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dpyz5ehgo"/><path class="c3llzibuh"/></g>`,
		"fallback": "streamline-color:brightness-1",
	});
}

export default Component;
