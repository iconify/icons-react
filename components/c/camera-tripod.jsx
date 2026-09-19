import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/uitlmqh0r.css';
import '../../css/g/g_oiv7bye.css';
import '../../css/q/qexqi5bar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="uitlmqh0r"/><path class="g_oiv7bye"/><circle class="qexqi5bar"/></g>`,
		"fallback": "hugeicons:camera-tripod",
	});
}

export default Component;
