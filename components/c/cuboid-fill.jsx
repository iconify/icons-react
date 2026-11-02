import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qr3ad0btl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qr3ad0btl"/>`,
		"fallback": "mingcute:cuboid-fill",
	});
}

export default Component;
