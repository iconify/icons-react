import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/esnsmq0kx.css';
import '../../css/f/f97-rowio.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="esnsmq0kx"/><path clip-rule="evenodd" class="f97-rowio"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:car-off",
	});
}

export default Component;
