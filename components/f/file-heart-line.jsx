import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-v7ou0hx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-v7ou0hx"/>`,
		"fallback": "mingcute:file-heart-line",
	});
}

export default Component;
