import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ziba7sb4v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ziba7sb4v"/>`,
		"fallback": "at-icons:cursor-text",
	});
}

export default Component;
