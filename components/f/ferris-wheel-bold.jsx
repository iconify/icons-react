import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/so2i40b2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="so2i40b2q"/>`,
		"fallback": "solar:ferris-wheel-bold",
	});
}

export default Component;
