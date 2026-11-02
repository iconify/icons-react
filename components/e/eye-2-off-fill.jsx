import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dw_js72hb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dw_js72hb"/>`,
		"fallback": "mingcute:eye-2-off-fill",
	});
}

export default Component;
