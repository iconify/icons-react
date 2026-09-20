import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/ssbhracgn.css';
import '../../css/t/thmn1rbuy.css';
import '../../css/q/q0vsi9y8f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ssbhracgn"/><path class="thmn1rbuy"/><path class="q0vsi9y8f"/></g>`,
		"fallback": "reicon:bookmark-open-duotone",
	});
}

export default Component;
