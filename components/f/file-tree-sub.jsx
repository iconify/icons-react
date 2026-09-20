import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fyac__b0v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fyac__b0v"/>`,
		"fallback": "vaadin:file-tree-sub",
	});
}

export default Component;
