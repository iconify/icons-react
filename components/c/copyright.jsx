import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x8kzv1-_s.css';
import '../../css/z/zby7gkbyx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x8kzv1-_s"/><path clip-rule="evenodd" class="zby7gkbyx"/></g>`,
		"fallback": "gg:copyright",
	});
}

export default Component;
