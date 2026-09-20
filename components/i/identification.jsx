import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c3j04fb6w.css';
import '../../css/z/zgj-9nbrm.css';
import '../../css/g/g3vy2_9sr.css';
import '../../css/x/xun5vn6pg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="c3j04fb6w"/><path clip-rule="evenodd" class="zgj-9nbrm"/><path class="g3vy2_9sr"/><path class="xun5vn6pg"/></g>`,
		"fallback": "pepicons-pencil:identification",
	});
}

export default Component;
