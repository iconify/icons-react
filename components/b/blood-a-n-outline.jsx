import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/skuh4r3wi.css';
import '../../css/u/uam7o_q-z.css';
import '../../css/h/h0i813b-n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="skuh4r3wi"/><path class="uam7o_q-z"/><path clip-rule="evenodd" class="h0i813b-n"/></g>`,
		"fallback": "healthicons:blood-a-n-outline",
	});
}

export default Component;
