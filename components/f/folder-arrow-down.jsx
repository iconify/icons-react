import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yb0yibb9t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yb0yibb9t"/>`,
		"fallback": "noviair-light:folder-arrow-down",
	});
}

export default Component;
