import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yyy571bav.css';
import '../../css/m/mlcmwpbbf.css';
import '../../css/l/l28zvvb-b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yyy571bav"/><path clip-rule="evenodd" class="mlcmwpbbf"/><path class="l28zvvb-b"/></g>`,
		"fallback": "healthicons:i-documents-accepted-outline",
	});
}

export default Component;
