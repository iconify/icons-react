import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wm3ss_-fj.css';
import '../../css/b/bb-khxbua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wm3ss_-fj"/><path clip-rule="evenodd" class="bb-khxbua"/></g>`,
		"fallback": "healthicons:cardiogram-24px",
	});
}

export default Component;
