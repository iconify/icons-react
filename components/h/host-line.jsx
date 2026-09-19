import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n3ijj1g6b.css';
import '../../css/y/y8xl5o4fl.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n3ijj1g6b"/><path class="y8xl5o4fl"/>`,
		"fallback": "clarity:host-line",
	});
}

export default Component;
