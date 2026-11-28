import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eq8a18bjx.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/ir8o7_mqf.css';
import '../../css/y/y99pxgpge.css';
import '../../css/f/f4317cc7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eq8a18bjx secondary"/><g class="dt0cm9dhy primary"><path class="ir8o7_mqf"/><path class="y99pxgpge"/><path class="f4317cc7f"/></g>`,
		"fallback": "iconaut:gripper-duo",
	});
}

export default Component;
