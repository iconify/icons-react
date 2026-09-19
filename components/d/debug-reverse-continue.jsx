import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqglm8bln.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vqglm8bln"/>`,
		"fallback": "codicon:debug-reverse-continue",
	});
}

export default Component;
