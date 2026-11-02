import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g95tqh1qr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g95tqh1qr"/>`,
		"fallback": "mingcute:brick-wall-shield-line",
	});
}

export default Component;
