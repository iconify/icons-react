import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qqdx3fopl.css';
import '../../css/i/i-m_ll3wj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qqdx3fopl"/><path class="i-m_ll3wj"/></g>`,
		"fallback": "tabler:badges-filled",
	});
}

export default Component;
