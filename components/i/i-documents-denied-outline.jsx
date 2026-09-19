import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hw2s293_a.css';
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
		"content": `<g class="cuyn6tgcc"><path class="hw2s293_a"/><path clip-rule="evenodd" class="mlcmwpbbf"/><path class="l28zvvb-b"/></g>`,
		"fallback": "healthicons:i-documents-denied-outline",
	});
}

export default Component;
