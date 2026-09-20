import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zkvzhe2zd.css';
import '../../css/z/zcna14bss.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zkvzhe2zd"/><path clip-rule="evenodd" class="zcna14bss"/></g>`,
		"fallback": "reicon:folder-plus",
	});
}

export default Component;
