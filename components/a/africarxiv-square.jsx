import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ckjs4eb9e.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ckjs4eb9e"/>`,
		"fallback": "academicons:africarxiv-square",
	});
}

export default Component;
