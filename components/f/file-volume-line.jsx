import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-1bbqbyh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-1bbqbyh"/>`,
		"fallback": "mingcute:file-volume-line",
	});
}

export default Component;
