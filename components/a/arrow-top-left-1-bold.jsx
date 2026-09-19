import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdn_9obuu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hdn_9obuu"/>`,
		"fallback": "iconamoon:arrow-top-left-1-bold",
	});
}

export default Component;
