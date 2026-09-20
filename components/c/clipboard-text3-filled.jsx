import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xkcbf1byo.css';
import '../../css/k/k_re8dzet.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xkcbf1byo"/><path class="k_re8dzet"/></g>`,
		"fallback": "reicon:clipboard-text3-filled",
	});
}

export default Component;
