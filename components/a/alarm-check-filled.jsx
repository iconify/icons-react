import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_b4k_bgz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g_b4k_bgz"/>`,
		"fallback": "griddy-icons:alarm-check-filled",
	});
}

export default Component;
