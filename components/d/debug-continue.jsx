import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8gbhxr-y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h8gbhxr-y"/>`,
		"fallback": "codicon:debug-continue",
	});
}

export default Component;
