import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ochsdnxff.css';
import '../../css/n/ng79m1bnm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ochsdnxff"/><path class="ng79m1bnm"/></g>`,
		"fallback": "healthicons:burn",
	});
}

export default Component;
