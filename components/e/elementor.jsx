import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mobnpr2vh.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mobnpr2vh"/>`,
		"fallback": "fa-brands:elementor",
	});
}

export default Component;
