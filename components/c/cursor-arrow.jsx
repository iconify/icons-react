import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yrq7_2bwu.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yrq7_2bwu"/>`,
		"fallback": "radix-icons:cursor-arrow",
	});
}

export default Component;
