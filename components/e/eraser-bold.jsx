import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b47fn0bab.css';
import '../../css/g/ggag7xbqp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b47fn0bab"/><path class="ggag7xbqp"/></g>`,
		"fallback": "solar:eraser-bold",
	});
}

export default Component;
