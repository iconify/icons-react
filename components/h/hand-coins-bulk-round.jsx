import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q_d-9obkf.css';
import '../../css/t/tyc83pbii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q_d-9obkf"/><path class="tyc83pbii"/></g>`,
		"fallback": "coolicons:hand-coins-bulk-round",
	});
}

export default Component;
