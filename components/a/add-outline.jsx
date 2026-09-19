import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qr86_qu0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qr86_qu0m"/>`,
		"fallback": "gridicons:add-outline",
	});
}

export default Component;
