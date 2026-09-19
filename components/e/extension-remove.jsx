import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/no_5moguh.css';
import '../../css/c/c_u4a_b-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="no_5moguh"/><path class="c_u4a_b-l"/></g>`,
		"fallback": "gg:extension-remove",
	});
}

export default Component;
