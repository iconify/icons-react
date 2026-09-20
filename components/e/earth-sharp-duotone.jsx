import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yjdw7wb-b.css';
import '../../css/z/ztb096_ex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yjdw7wb-b"/><path clip-rule="evenodd" class="ztb096_ex"/></g>`,
		"fallback": "keyline-icons:earth-sharp-duotone",
	});
}

export default Component;
