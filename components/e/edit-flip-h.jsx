import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jvmo4_g-s.css';
import '../../css/b/b_5ixsbbz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jvmo4_g-s"/><path class="b_5ixsbbz"/></g>`,
		"fallback": "gg:edit-flip-h",
	});
}

export default Component;
