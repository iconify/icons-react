import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zn_5r5bci.css';
import '../../css/v/v1zar_b1m.css';
import '../../css/v/vz-zyzafm.css';
import '../../css/h/h23htobjy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zn_5r5bci"/><path class="v1zar_b1m"/><path class="vz-zyzafm"/><path class="h23htobjy"/></g>`,
		"fallback": "streamline-cyber-color:basketball",
	});
}

export default Component;
