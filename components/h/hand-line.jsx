import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lzq5r0lry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lzq5r0lry"/>`,
		"fallback": "mingcute:hand-line",
	});
}

export default Component;
