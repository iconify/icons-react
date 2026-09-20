import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k1ctipbpr.css';
import '../../css/g/g471cm4qp.css';
import '../../css/p/p0fvn_bwl.css';
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
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="k1ctipbpr"/><path clip-rule="evenodd" class="g471cm4qp"/><path clip-rule="evenodd" class="p0fvn_bwl"/><path class="zsuclwbnx"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-pencil:hourglass-circle-off",
	});
}

export default Component;
