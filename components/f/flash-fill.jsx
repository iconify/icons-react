import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zzzpmz_bo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zzzpmz_bo"/>`,
		"fallback": "mingcute:flash-fill",
	});
}

export default Component;
