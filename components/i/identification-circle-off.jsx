import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h36sa31ok.css';
import '../../css/q/qwsb0-m-k.css';
import '../../css/q/q3d0nnoea.css';
import '../../css/i/i2r9qrcoy.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="h36sa31ok"/><path clip-rule="evenodd" class="qwsb0-m-k"/><path class="q3d0nnoea"/><path class="i2r9qrcoy"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-pencil:identification-circle-off",
	});
}

export default Component;
