import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/usdt1jgns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="usdt1jgns"/>`,
		"fallback": "mingcute:file-image-line",
	});
}

export default Component;
