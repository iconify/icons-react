import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/waveqpqzu.css';
import '../../css/j/j-h7egb1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="waveqpqzu"/><path clip-rule="evenodd" class="j-h7egb1u"/></g>`,
		"fallback": "solar:folder-cog-bold",
	});
}

export default Component;
