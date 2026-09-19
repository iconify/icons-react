import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fgi1oabxo.css';
import '../../css/y/ygwddxzjt.css';
import '../../css/j/jscgw910q.css';
import '../../css/g/gv00i1u7i.css';
import '../../css/u/uo39__bxe.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fgi1oabxo"/><path class="ygwddxzjt"/><path class="jscgw910q"/><path class="gv00i1u7i"/><path class="uo39__bxe"/></g>`,
		"fallback": "pepicons:contract",
	});
}

export default Component;
