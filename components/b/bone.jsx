import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqyn79ggl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vqyn79ggl"/>`,
		"fallback": "at-icons:bone",
	});
}

export default Component;
