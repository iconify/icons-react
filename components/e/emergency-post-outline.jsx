import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lxi51qn7s.css';
import '../../css/o/otzej-14v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lxi51qn7s"/><path clip-rule="evenodd" class="otzej-14v"/></g>`,
		"fallback": "healthicons:emergency-post-outline",
	});
}

export default Component;
