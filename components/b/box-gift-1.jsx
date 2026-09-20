import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l33qbtbhd.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l33qbtbhd"/>`,
		"fallback": "lineicons:box-gift-1",
	});
}

export default Component;
