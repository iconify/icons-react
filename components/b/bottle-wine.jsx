import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uv33yzfey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uv33yzfey"/>`,
		"fallback": "pixelarticons:bottle-wine",
	});
}

export default Component;
