import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pt6s56s_h.css';
import '../../css/e/e94e0ph-m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pt6s56s_h"/><path class="e94e0ph-m"/></g>`,
		"fallback": "bi:align-end",
	});
}

export default Component;
