import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ceqw9tbxl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ceqw9tbxl"/>`,
		"fallback": "raphael:cube",
	});
}

export default Component;
