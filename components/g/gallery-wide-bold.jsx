import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z4t6-ibdt.css';
import '../../css/y/ywqmrebdw.css';
import '../../css/x/xxzrkjbgs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="z4t6-ibdt"/><path clip-rule="evenodd" class="ywqmrebdw"/><path class="xxzrkjbgs"/></g>`,
		"fallback": "solar:gallery-wide-bold",
	});
}

export default Component;
