import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jgaqzcb5d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><polygon points="1.75 13.25 14.25 13.25 14.25 8.25 11.75 2.75 4.25 2.75 1.75 8.25"/><path class="jgaqzcb5d"/></g>`,
		"fallback": "charm:inbox",
	});
}

export default Component;
