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
		"content": `<g class="hntgybcog"><polyline points="14.25 13.25 4.75 13.25 1.75 10.25 9.25 2.75 14.25 7.75 8.75 13.25"/><line x1="5.25" x2="10.25" y1="6.75" y2="11.75"/></g>`,
		"fallback": "charm:eraser",
	});
}

export default Component;
