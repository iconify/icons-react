import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m077kqbnj.css';

const viewBox = {"width":72,"height":735};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m077kqbnj"/>`,
		"fallback": "ls:i-upper-case",
	});
}

export default Component;
