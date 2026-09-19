import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zmqvxyboy.css';
import '../../css/z/zi77nac4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zmqvxyboy"/><path class="zi77nac4z"/></g>`,
		"fallback": "hugeicons:chess-knight",
	});
}

export default Component;
