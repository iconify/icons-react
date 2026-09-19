import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wzybugbyk.css';
import '../../css/x/xr5idrgpu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wzybugbyk"/><path clip-rule="evenodd" class="xr5idrgpu"/></g>`,
		"fallback": "pepicons:folder-print",
	});
}

export default Component;
