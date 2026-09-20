import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i8asgzqny.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i8asgzqny"/>`,
		"fallback": "vaadin:del-a",
	});
}

export default Component;
