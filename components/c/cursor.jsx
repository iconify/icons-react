import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><polygon points="1.75 1.75 6.25 14.25 8.75 8.75 14.25 6.25"/><line x1="9.25" x2="13.25" y1="9.25" y2="13.25"/></g>`,
		"fallback": "charm:cursor",
	});
}

export default Component;
