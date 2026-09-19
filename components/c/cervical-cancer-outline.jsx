import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zo8k5kb-x.css';
import '../../css/e/ejrk76bap.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zo8k5kb-x"/><path clip-rule="evenodd" class="ejrk76bap"/></g>`,
		"fallback": "healthicons:cervical-cancer-outline",
	});
}

export default Component;
