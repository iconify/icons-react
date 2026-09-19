import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jkon69jfq.css';
import '../../css/l/l2tuk3f1n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jkon69jfq"/><path clip-rule="evenodd" class="l2tuk3f1n"/></g>`,
		"fallback": "gg:edit-mask",
	});
}

export default Component;
