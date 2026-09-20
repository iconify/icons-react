import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8x1_xoez.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l8x1_xoez"/>`,
		"fallback": "pinhead:dog-wearing-harness-on-leash",
	});
}

export default Component;
