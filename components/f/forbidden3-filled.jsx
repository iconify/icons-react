import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l7xo76b8i.css';
import '../../css/b/bmffrl8gs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l7xo76b8i"/><path class="bmffrl8gs"/></g>`,
		"fallback": "reicon:forbidden3-filled",
	});
}

export default Component;
