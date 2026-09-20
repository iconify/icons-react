import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hxc6tmb0e.css';
import '../../css/a/aj0-n1bxl.css';
import '../../css/g/grm8oqpoo.css';
import '../../css/m/mq_7rmb8w.css';
import '../../css/n/np4g1kbug.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="hxc6tmb0e"/><path class="aj0-n1bxl"/><path class="grm8oqpoo"/><path class="mq_7rmb8w"/><path class="np4g1kbug"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-pencil:hand-point-open-circle",
	});
}

export default Component;
