import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qr2540bcn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qr2540bcn"/>`,
		"fallback": "mingcute:horn-2-fill",
	});
}

export default Component;
