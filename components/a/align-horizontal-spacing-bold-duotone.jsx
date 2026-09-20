import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eyve0m_9g.css';
import '../../css/q/qm9yo2b1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="eyve0m_9g"/><path class="qm9yo2b1l"/></g>`,
		"fallback": "solar:align-horizontal-spacing-bold-duotone",
	});
}

export default Component;
