import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yvd61yb8z.css';
import '../../css/l/ljynfachj.css';
import '../../css/e/ec4u75bgn.css';
import '../../css/w/wzw7k-iny.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yvd61yb8z"/><path class="ljynfachj"/><path class="ec4u75bgn"/><path class="wzw7k-iny"/></g>`,
		"fallback": "streamline-flex-color:3d-rotate-1",
	});
}

export default Component;
