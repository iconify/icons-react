import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u-al-640u.css';
import '../../css/v/vhp82m76o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u-al-640u"/><path clip-rule="evenodd" class="vhp82m76o"/></g>`,
		"fallback": "solar:double-alt-arrow-right-bold-duotone",
	});
}

export default Component;
