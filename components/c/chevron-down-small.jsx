import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cu0r17e0w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cu0r17e0w"/>`,
		"fallback": "vaadin:chevron-down-small",
	});
}

export default Component;
