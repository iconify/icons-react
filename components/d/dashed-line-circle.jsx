import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zijllk4_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zijllk4_l"/>`,
		"fallback": "hugeicons:dashed-line-circle",
	});
}

export default Component;
