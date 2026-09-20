import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/znhiiubpt.css';
import '../../css/u/u_88kkb-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="znhiiubpt"/><path class="u_88kkb-t"/></g>`,
		"fallback": "reicon:folder2-duotone",
	});
}

export default Component;
