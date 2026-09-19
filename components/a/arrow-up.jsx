import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p59xlhsbb.css';

const viewBox = {"width":1600,"height":1472};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p59xlhsbb"/>`,
		"fallback": "fa:arrow-up",
	});
}

export default Component;
