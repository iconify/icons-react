import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zet6c8b7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zet6c8b7o"/>`,
		"fallback": "boxicons:cart-minus-filled",
	});
}

export default Component;
