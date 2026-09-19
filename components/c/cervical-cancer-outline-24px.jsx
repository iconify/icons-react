import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t_q_04-jf.css';
import '../../css/r/rt6cjzb_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="t_q_04-jf"/><path clip-rule="evenodd" class="rt6cjzb_a"/></g>`,
		"fallback": "healthicons:cervical-cancer-outline-24px",
	});
}

export default Component;
