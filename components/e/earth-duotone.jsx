import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yjdw7wb-b.css';
import '../../css/a/aw64gqbyj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yjdw7wb-b"/><path clip-rule="evenodd" class="aw64gqbyj"/></g>`,
		"fallback": "keyline-icons:earth-duotone",
	});
}

export default Component;
