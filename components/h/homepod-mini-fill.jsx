import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mub4bxbvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mub4bxbvj"/>`,
		"fallback": "mingcute:homepod-mini-fill",
	});
}

export default Component;
