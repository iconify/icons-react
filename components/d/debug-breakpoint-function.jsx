import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bg4oyd4_b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bg4oyd4_b"/>`,
		"fallback": "codicon:debug-breakpoint-function",
	});
}

export default Component;
