import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u8bh252mq.css';
import '../../css/p/p_ff4pbut.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u8bh252mq"/><path clip-rule="evenodd" class="p_ff4pbut"/></g>`,
		"fallback": "healthicons:cardiogram-e-outline",
	});
}

export default Component;
