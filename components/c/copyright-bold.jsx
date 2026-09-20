import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zma2bx9-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zma2bx9-h"/>`,
		"fallback": "solar:copyright-bold",
	});
}

export default Component;
