import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/u/u8xmwksak.css';
import '../../css/p/p-wxpmsdv.css';
import '../../css/w/w1cu-249y.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="u8xmwksak"/><path class="p-wxpmsdv"/><path class="w1cu-249y"/></g>`,
		"fallback": "system-uicons:clipboard-copy",
	});
}

export default Component;
