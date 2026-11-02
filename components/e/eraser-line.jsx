import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cl98cu6fg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cl98cu6fg"/>`,
		"fallback": "mingcute:eraser-line",
	});
}

export default Component;
