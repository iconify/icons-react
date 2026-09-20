import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q40-4gbog.css';
import '../../css/j/jct4a2bzg.css';
import '../../css/v/vmamqn6if.css';
import '../../css/s/skh7z2_xq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="q40-4gbog"/><path class="jct4a2bzg"/><path class="vmamqn6if"/><path class="skh7z2_xq"/></g>`,
		"fallback": "solar:case-round-bold",
	});
}

export default Component;
