import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mffjr_bbm.css';
import '../../css/w/w8gg6ab1a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="mffjr_bbm"/><path class="w8gg6ab1a"/></g>`,
		"fallback": "healthicons:dialysis",
	});
}

export default Component;
