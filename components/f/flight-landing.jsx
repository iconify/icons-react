import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zyo1fpb1o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zyo1fpb1o"/>`,
		"fallback": "vaadin:flight-landing",
	});
}

export default Component;
