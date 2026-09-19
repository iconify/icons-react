import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v8d4d8buo.css';
import '../../css/c/c0brm0bxp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v8d4d8buo"/><path class="c0brm0bxp"/></g>`,
		"fallback": "healthicons:high-level-24px",
	});
}

export default Component;
