import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q3rkexy9t.css';
import '../../css/v/vkf82vblp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q3rkexy9t secondary"/><path class="primary vkf82vblp"/></g>`,
		"fallback": "iconaut:foldable-tent-duotone",
	});
}

export default Component;
