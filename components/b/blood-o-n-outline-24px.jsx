import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/loxyoccpf.css';
import '../../css/q/q-ba_wsrb.css';
import '../../css/v/v4s2axqse.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="loxyoccpf"/><path class="q-ba_wsrb"/><path clip-rule="evenodd" class="v4s2axqse"/></g>`,
		"fallback": "healthicons:blood-o-n-outline-24px",
	});
}

export default Component;
