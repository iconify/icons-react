import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xpd3oob2g.css';
import '../../css/j/j_sc5dbeu.css';
import '../../css/h/h69s6dnea.css';
import '../../css/a/a_tem7q8y.css';
import '../../css/g/ghiic7brw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="xpd3oob2g"/><path class="j_sc5dbeu"/><path class="h69s6dnea"/><path class="a_tem7q8y"/><path class="ghiic7brw"/></g>`,
		"fallback": "pepicons:angle-up-print",
	});
}

export default Component;
