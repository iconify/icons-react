import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydcvy7b8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ydcvy7b8r"/>`,
		"fallback": "mingcute:folder-open-fill",
	});
}

export default Component;
