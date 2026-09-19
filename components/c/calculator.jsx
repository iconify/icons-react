import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kif7w0bon.css';
import '../../css/d/dlpr2ebln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="kif7w0bon"/><path class="dlpr2ebln"/></g>`,
		"fallback": "griddy-icons:calculator",
	});
}

export default Component;
