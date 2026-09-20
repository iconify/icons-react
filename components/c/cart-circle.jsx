import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/khiaq02ik.css';
import '../../css/b/boc9s-fhp.css';
import '../../css/b/b4dmablfp.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="khiaq02ik"/><path clip-rule="evenodd" class="boc9s-fhp"/><path class="b4dmablfp"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-pencil:cart-circle",
	});
}

export default Component;
