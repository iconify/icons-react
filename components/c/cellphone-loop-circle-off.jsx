import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j3037bcit.css';
import '../../css/o/os-ibivrc.css';
import '../../css/g/gcjffpk1n.css';
import '../../css/y/y41r9ilfq.css';
import '../../css/z/zsuclwbnx.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j3037bcit"/><path clip-rule="evenodd" class="os-ibivrc"/><path clip-rule="evenodd" class="gcjffpk1n"/><path clip-rule="evenodd" class="y41r9ilfq"/><path class="zsuclwbnx"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-pencil:cellphone-loop-circle-off",
	});
}

export default Component;
