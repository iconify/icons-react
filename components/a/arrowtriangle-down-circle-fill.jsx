import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ngnx30bzh.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ngnx30bzh"/>`,
		"fallback": "f7:arrowtriangle-down-circle-fill",
	});
}

export default Component;
