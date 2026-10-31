import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q8l-7zvse.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q8l-7zvse"/>`,
		"fallback": "coolicons:eraser-fill-round",
	});
}

export default Component;
