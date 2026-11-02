import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l__9c4bjm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l__9c4bjm"/>`,
		"fallback": "mingcute:cloud-snow-fill",
	});
}

export default Component;
