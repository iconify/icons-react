import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qbmffccmv.css';
import '../../css/k/ku6u7dbkg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="qbmffccmv"/><path class="ku6u7dbkg"/></g>`,
		"fallback": "healthicons:family-planning",
	});
}

export default Component;
