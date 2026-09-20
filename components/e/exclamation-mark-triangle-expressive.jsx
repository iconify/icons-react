import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ipbbkzbja.css';
import '../../css/v/vuj57v7fe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ipbbkzbja"/><path clip-rule="evenodd" class="vuj57v7fe"/></g>`,
		"fallback": "nrk:exclamation-mark-triangle-expressive",
	});
}

export default Component;
