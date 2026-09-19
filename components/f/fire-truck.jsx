import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yy6mcej6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yy6mcej6h"/>`,
		"fallback": "griddy-icons:fire-truck",
	});
}

export default Component;
