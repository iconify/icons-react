import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fymmy6yxr.css';
import '../../css/q/qan4aub6p.css';
import '../../css/m/mr4vr-85q.css';
import '../../css/f/fzuu2xbsz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="fymmy6yxr"/><path clip-rule="evenodd" class="qan4aub6p"/><path clip-rule="evenodd" class="mr4vr-85q"/><path class="fzuu2xbsz"/></g>`,
		"fallback": "solar:chart-2-outline",
	});
}

export default Component;
