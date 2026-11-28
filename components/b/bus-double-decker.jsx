import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/ij3vyybgh.css';
import '../../css/w/w3i1zx0jw.css';
import '../../css/r/rxhwednid.css';
import '../../css/z/zrm458j8o.css';
import '../../css/r/rp1uvpdcr.css';
import '../../css/c/c_v758zso.css';
import '../../css/j/jrk3flb4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ij3vyybgh"/><path class="w3i1zx0jw"/><path class="rxhwednid"/><path class="zrm458j8o"/><path class="rp1uvpdcr"/><path class="c_v758zso"/><path class="jrk3flb4s"/></g>`,
		"fallback": "iconaut:bus-double-decker",
	});
}

export default Component;
