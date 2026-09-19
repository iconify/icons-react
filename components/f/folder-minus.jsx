import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qkc7o_b9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qkc7o_b9d"/>`,
		"fallback": "hugeicons:folder-minus",
	});
}

export default Component;
