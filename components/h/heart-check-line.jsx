import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/toffi_b7x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="toffi_b7x"/>`,
		"fallback": "mingcute:heart-check-line",
	});
}

export default Component;
