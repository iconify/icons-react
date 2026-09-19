import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-qr53h2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-qr53h2p"/>`,
		"fallback": "heroicons:arrow-turn-right-down",
	});
}

export default Component;
