import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gag497ble.css';
import '../../css/e/e0fv-pquy.css';
import '../../css/y/yt-6yebqn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gag497ble"/><path clip-rule="evenodd" class="e0fv-pquy"/><path class="yt-6yebqn"/></g>`,
		"fallback": "pepicons:color-picker-print",
	});
}

export default Component;
