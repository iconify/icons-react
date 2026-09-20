import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z12x-2b3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z12x-2b3l"/>`,
		"fallback": "mingcute:eraser-fill",
	});
}

export default Component;
