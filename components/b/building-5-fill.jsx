import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cesw2mitc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cesw2mitc"/>`,
		"fallback": "mingcute:building-5-fill",
	});
}

export default Component;
