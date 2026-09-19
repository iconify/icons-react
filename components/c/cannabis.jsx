import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i8-1o0_1o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i8-1o0_1o"/>`,
		"fallback": "hugeicons:cannabis",
	});
}

export default Component;
