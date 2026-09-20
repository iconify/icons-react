import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cbnhusb6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cbnhusb6w"/>`,
		"fallback": "mingcute:folder-check-fill",
	});
}

export default Component;
