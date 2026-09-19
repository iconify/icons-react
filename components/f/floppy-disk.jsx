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
		"content": `<g class="hntgybcog"><polygon points="2.75 2.75 2.75 13.25 13.25 13.25 13.25 5.75 10.25 2.75"/><polyline points="5.75 13.25 5.75 9.75 10.25 9.75 10.25 13.25"/></g>`,
		"fallback": "charm:floppy-disk",
	});
}

export default Component;
