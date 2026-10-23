import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xk85m7b_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xk85m7b_b"/>`,
		"fallback": "andrsrxn:crosshair-line",
	});
}

export default Component;
