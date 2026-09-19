import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sm2q5acmg.css';
import '../../css/q/qr1h_rcny.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sm2q5acmg"/><path class="qr1h_rcny"/></g>`,
		"fallback": "fluent-emoji-high-contrast:banjo",
	});
}

export default Component;
