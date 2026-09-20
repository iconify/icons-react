import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mlb6dabuy.css';
import '../../css/f/fd6f4dbzc.css';
import '../../css/m/m_goimbsb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mlb6dabuy"/><path class="fd6f4dbzc"/><path clip-rule="evenodd" class="m_goimbsb"/></g>`,
		"fallback": "solar:chat-round-question-mark-outline",
	});
}

export default Component;
