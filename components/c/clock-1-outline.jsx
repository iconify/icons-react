import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/m23wa8bmm.css';
import '../../css/l/luchi18gl.css';
import '../../css/u/u18d3ddyr.css';
import '../../css/p/pqg7pcb_g.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="m23wa8bmm"/><path class="luchi18gl"/><path class="u18d3ddyr"/><path class="pqg7pcb_g"/></g>`,
		"fallback": "glyphs:clock-1-outline",
	});
}

export default Component;
