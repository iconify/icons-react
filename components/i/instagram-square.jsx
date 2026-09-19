import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d3wwhbp_h.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d3wwhbp_h"/>`,
		"fallback": "fa6-brands:instagram-square",
	});
}

export default Component;
