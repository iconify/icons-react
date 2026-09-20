import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qr4x_0bpu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qr4x_0bpu"/>`,
		"fallback": "tabler:arrow-down-left-circle",
	});
}

export default Component;
