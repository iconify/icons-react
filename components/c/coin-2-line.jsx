import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ssvx-7v6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ssvx-7v6r"/>`,
		"fallback": "mingcute:coin-2-line",
	});
}

export default Component;
