import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zea2ncbcg.css';
import '../../css/c/c6zduoowu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="zea2ncbcg"/><path class="c6zduoowu"/></g>`,
		"fallback": "healthicons:cleaning",
	});
}

export default Component;
