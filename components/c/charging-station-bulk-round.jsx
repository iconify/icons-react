import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k-r8gbbdj.css';
import '../../css/q/q8he2i8hf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k-r8gbbdj"/><path class="q8he2i8hf"/></g>`,
		"fallback": "coolicons:charging-station-bulk-round",
	});
}

export default Component;
