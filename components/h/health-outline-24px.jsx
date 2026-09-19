import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ev6ffz4on.css';
import '../../css/q/q6yvzxb1o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ev6ffz4on"/><path clip-rule="evenodd" class="q6yvzxb1o"/></g>`,
		"fallback": "healthicons:health-outline-24px",
	});
}

export default Component;
