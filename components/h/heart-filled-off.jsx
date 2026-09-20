import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c280fggum.css';
import '../../css/j/jk-2mmc7v.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="c280fggum"/><path clip-rule="evenodd" class="jk-2mmc7v"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-print:heart-filled-off",
	});
}

export default Component;
