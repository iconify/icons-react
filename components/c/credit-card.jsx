import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xi5gwhbhf.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xi5gwhbhf"/>`,
		"fallback": "fa-solid:credit-card",
	});
}

export default Component;
