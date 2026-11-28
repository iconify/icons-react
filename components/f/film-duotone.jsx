import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lzriw4bni.css';
import '../../css/q/qt83b6rvg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lzriw4bni secondary"/><path class="primary qt83b6rvg"/></g>`,
		"fallback": "iconaut:film-duotone",
	});
}

export default Component;
