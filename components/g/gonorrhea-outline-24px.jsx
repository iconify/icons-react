import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rmv7858-j.css';
import '../../css/l/l755ytkgf.css';
import '../../css/q/qzbfqsbfy.css';
import '../../css/q/q_n0noqey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rmv7858-j"/><path clip-rule="evenodd" class="l755ytkgf"/><path class="qzbfqsbfy"/><path clip-rule="evenodd" class="q_n0noqey"/></g>`,
		"fallback": "healthicons:gonorrhea-outline-24px",
	});
}

export default Component;
