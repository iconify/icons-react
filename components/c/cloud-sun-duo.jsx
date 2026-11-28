import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9mwjd2si.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vti9_99oi.css';
import '../../css/z/z22za_s7e.css';
import '../../css/e/ew760_wtm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s9mwjd2si secondary"/><g class="dt0cm9dhy primary"><path class="vti9_99oi"/><path class="z22za_s7e"/><path class="ew760_wtm"/></g>`,
		"fallback": "iconaut:cloud-sun-duo",
	});
}

export default Component;
