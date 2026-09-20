import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ibf5nlbkx.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ibf5nlbkx"/>`,
		"fallback": "pinhead:human-head",
	});
}

export default Component;
