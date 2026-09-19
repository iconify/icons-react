import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f8406y-qd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f8406y-qd"/>`,
		"fallback": "carbon:hybrid-networking-alt",
	});
}

export default Component;
