import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qkx9uxboa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qkx9uxboa"/>`,
		"fallback": "hugeicons:heart-minus",
	});
}

export default Component;
