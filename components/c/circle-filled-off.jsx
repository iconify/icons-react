import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/itq2xvexy.css';
import '../../css/y/yairfimiw.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle class="itq2xvexy"/><path clip-rule="evenodd" class="yairfimiw"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-print:circle-filled-off",
	});
}

export default Component;
