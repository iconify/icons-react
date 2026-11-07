import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kg5mtsbge.css';
import '../../css/e/eiwc-7x-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kg5mtsbge"/><path class="eiwc-7x-k"/>`,
		"fallback": "solar:bluetooth-bold-duotone",
	});
}

export default Component;
