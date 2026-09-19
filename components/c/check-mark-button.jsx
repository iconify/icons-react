import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h_bhhd9ki.css';
import '../../css/u/uru88vgdy.css';
import '../../css/l/lms1l_bwk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h_bhhd9ki"/><path class="uru88vgdy"/><path class="lms1l_bwk"/></g>`,
		"fallback": "fluent-emoji-high-contrast:check-mark-button",
	});
}

export default Component;
