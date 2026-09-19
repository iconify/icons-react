import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g7e2-v9-w.css';
import '../../css/t/t-78ssb1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g7e2-v9-w"/><path clip-rule="evenodd" class="t-78ssb1j"/></g>`,
		"fallback": "healthicons:health-worker-outline-24px",
	});
}

export default Component;
