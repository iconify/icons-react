import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cakfztcus.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cakfztcus"/>`,
		"fallback": "selfhst:borgmatic-dark",
	});
}

export default Component;
