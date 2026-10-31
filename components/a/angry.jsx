import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z1j7k2dhf.css';
import '../../css/g/grtmxk3xp.css';
import '../../css/i/iv2qj2avp.css';
import '../../css/r/rwuh-cftt.css';
import '../../css/j/j-bisdbrb.css';
import '../../css/j/jr1vpxb_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow z1j7k2dhf"/><path class="grtmxk3xp"/><path class="iv2qj2avp"/><path class="rwuh-cftt"/><path class="j-bisdbrb"/><path class="jr1vpxb_x"/></g>`,
		"fallback": "withicons-retro:angry",
	});
}

export default Component;
