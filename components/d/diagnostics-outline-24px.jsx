import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dqjdzwb4b.css';
import '../../css/g/g-fswfmas.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dqjdzwb4b"/><path clip-rule="evenodd" class="g-fswfmas"/></g>`,
		"fallback": "healthicons:diagnostics-outline-24px",
	});
}

export default Component;
