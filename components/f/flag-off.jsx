import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v4xpcu_js.css';
import '../../css/d/dt5g15b9b.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="v4xpcu_js"/><path clip-rule="evenodd" class="dt5g15b9b"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:flag-off",
	});
}

export default Component;
