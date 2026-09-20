import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i6zlj1xva.css';
import '../../css/m/mn__hf9sc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i6zlj1xva"/><path clip-rule="evenodd" class="mn__hf9sc"/></g>`,
		"fallback": "reicon:bluetooth-square-filled",
	});
}

export default Component;
