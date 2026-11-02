import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hp9b0cbzs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hp9b0cbzs"/>`,
		"fallback": "mingcute:file-pen-line-fill",
	});
}

export default Component;
