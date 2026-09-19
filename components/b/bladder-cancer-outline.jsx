import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nfv-0swmo.css';
import '../../css/b/b4pyf7l8i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="nfv-0swmo"/><path class="b4pyf7l8i"/></g>`,
		"fallback": "healthicons:bladder-cancer-outline",
	});
}

export default Component;
