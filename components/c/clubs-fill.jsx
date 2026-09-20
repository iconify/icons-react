import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zbj0pbvta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zbj0pbvta"/>`,
		"fallback": "mingcute:clubs-fill",
	});
}

export default Component;
