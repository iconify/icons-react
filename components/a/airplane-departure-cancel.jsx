import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/chq-8hbtu.css';
import '../../css/d/dhojt3ojp.css';
import '../../css/m/mapr2ly_z.css';
import '../../css/z/z_p5apaok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="chq-8hbtu"/><path class="dhojt3ojp"/><path class="mapr2ly_z"/><path class="z_p5apaok"/></g>`,
		"fallback": "streamline-cyber-color:airplane-departure-cancel",
	});
}

export default Component;
