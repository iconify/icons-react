import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zxr06lbbn.css';
import '../../css/w/w3_9rbijr.css';
import '../../css/d/difmjnb6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zxr06lbbn"/><path clip-rule="evenodd" class="w3_9rbijr"/><path class="difmjnb6n"/></g>`,
		"fallback": "healthicons:copper-iud-outline-24px",
	});
}

export default Component;
