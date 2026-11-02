import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjoqy8bel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjoqy8bel"/>`,
		"fallback": "mingcute:apple-intelligence-frame-fill",
	});
}

export default Component;
