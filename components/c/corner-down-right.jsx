import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-kfcpbuv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e-kfcpbuv"/>`,
		"fallback": "keyline-icons:corner-down-right",
	});
}

export default Component;
