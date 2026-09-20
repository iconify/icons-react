import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nqc2wg0eh.css';
import '../../css/a/ap6ym8bpq.css';
import '../../css/g/gj26gdbil.css';
import '../../css/p/pnn193b0s.css';
import '../../css/m/m15_1sz-a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nqc2wg0eh"/><path clip-rule="evenodd" class="ap6ym8bpq"/><path clip-rule="evenodd" class="gj26gdbil"/><path class="pnn193b0s"/><path class="m15_1sz-a"/></g>`,
		"fallback": "pepicons-print:can",
	});
}

export default Component;
