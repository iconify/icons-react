import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ldzt82bcc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ldzt82bcc"/>`,
		"fallback": "mingcute:computer-camera-line",
	});
}

export default Component;
