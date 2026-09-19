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
		"content": `<g class="hntgybcog"><polygon points="2.75 1.75 8.25 1.75 13.25 6.75 13.25 14.25 2.75 14.25"/><polyline points="7.75 2.25 7.75 7.25 12.75 7.25"/></g>`,
		"fallback": "charm:file",
	});
}

export default Component;
