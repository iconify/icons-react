import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyvolmu6b.css';
import '../../css/h/heqn6hbcg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xyvolmu6b"/><path clip-rule="evenodd" class="heqn6hbcg"/></g>`,
		"fallback": "healthicons:cane",
	});
}

export default Component;
