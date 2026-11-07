import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vgjuq208s.css';
import '../../css/u/u5frof2_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vgjuq208s"/><path class="u5frof2_h"/>`,
		"fallback": "solar:double-alt-arrow-right-bold",
	});
}

export default Component;
