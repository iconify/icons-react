import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/agkjp5bec.css';
import '../../css/c/chhgf-xbk.css';
import '../../css/w/w_4htojmi.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="agkjp5bec"/><path clip-rule="evenodd" class="chhgf-xbk"/><path clip-rule="evenodd" class="w_4htojmi"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:hourglass-off",
	});
}

export default Component;
