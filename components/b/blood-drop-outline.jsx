import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g8te497px.css';
import '../../css/l/lnab2vbzq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g8te497px"/><path clip-rule="evenodd" class="lnab2vbzq"/></g>`,
		"fallback": "healthicons:blood-drop-outline",
	});
}

export default Component;
