import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z39dw-vma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z39dw-vma"/>`,
		"fallback": "mingcute:currency-baht-fill",
	});
}

export default Component;
