import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cyoq1mlao.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cyoq1mlao"/>`,
		"fallback": "fa7-solid:industry",
	});
}

export default Component;
