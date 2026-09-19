import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3zxnib7j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k3zxnib7j"/>`,
		"fallback": "garden:bot-sparkle-stroke-16",
	});
}

export default Component;
