import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/ync4q5ypy.css';
import '../../css/u/u16rdbc4x.css';
import '../../css/o/op2j7xbfi.css';
import '../../css/z/zzwkrdbkt.css';
import '../../css/p/ps_vgzj8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ync4q5ypy"/><path class="u16rdbc4x"/><path class="op2j7xbfi wm-a"/><path class="zzwkrdbkt"/><path class="ps_vgzj8q"/></g>`,
		"fallback": "withicons:car-duo",
	});
}

export default Component;
