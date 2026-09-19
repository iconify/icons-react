import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xxcxpybik.css';
import '../../css/l/l1u6ybcci.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xxcxpybik"/><path class="l1u6ybcci"/>`,
		"fallback": "boxicons:camera-flip",
	});
}

export default Component;
