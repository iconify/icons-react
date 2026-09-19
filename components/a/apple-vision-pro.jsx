import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k66w0-bok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k66w0-bok"/>`,
		"fallback": "hugeicons:apple-vision-pro",
	});
}

export default Component;
