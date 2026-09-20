import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oy1pxvbrc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oy1pxvbrc"/>`,
		"fallback": "vaadin:chevron-circle-left",
	});
}

export default Component;
