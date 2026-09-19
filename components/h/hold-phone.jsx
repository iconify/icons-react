import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/x/xnkn0ubcl.css';
import '../../css/k/k315r8bxr.css';
import '../../css/c/cpb1ribrk.css';
import '../../css/v/v-zfuob0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="xnkn0ubcl"/><path class="k315r8bxr"/><path class="cpb1ribrk"/><path class="v-zfuob0n"/></g>`,
		"fallback": "hugeicons:hold-phone",
	});
}

export default Component;
