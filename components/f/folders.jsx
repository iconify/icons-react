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
		"content": `<g class="hntgybcog"><polygon points="4.75 2.25 4.75 10.25 14.25 10.25 14.25 3.75 9.25 3.75 7.75 2.25"/><polyline points="4.75 5.25 1.75 5.25 1.75 13.25 11.25 13.25 11.25 10.25"/></g>`,
		"fallback": "charm:folders",
	});
}

export default Component;
