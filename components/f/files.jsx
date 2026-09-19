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
		"content": `<g class="hntgybcog"><polygon points="9.25 1.75 13.25 5.75 13.25 11.25 5.75 11.25 5.75 1.75"/><polyline points="9.25 2.25 9.25 5.75 12.75 5.75"/><polyline points="10.25 11.75 10.25 14.25 2.75 14.25 2.75 4.75 5.25 4.75"/></g>`,
		"fallback": "charm:files",
	});
}

export default Component;
