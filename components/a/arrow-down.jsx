import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jo9bqjb5h.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jo9bqjb5h"/>`,
		"fallback": "fa7-solid:arrow-down",
	});
}

export default Component;
