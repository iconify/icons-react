import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qzt7kiboe.css';
import '../../css/i/imnn71rgu.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qzt7kiboe"/><path clip-rule="evenodd" class="imnn71rgu"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-print:bookmark-filled-off",
	});
}

export default Component;
