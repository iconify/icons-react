import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nhcqjls8n.css';
import '../../css/b/b4pyf7l8i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="nhcqjls8n"/><path class="b4pyf7l8i"/></g>`,
		"fallback": "healthicons:bladder-cancer",
	});
}

export default Component;
