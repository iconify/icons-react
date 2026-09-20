import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/op9p-6diq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="op9p-6diq"/>`,
		"fallback": "mingcute:dutch-windmill-line",
	});
}

export default Component;
