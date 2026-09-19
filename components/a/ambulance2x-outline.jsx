import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j56joab-t.css';
import '../../css/z/zxz6ve1il.css';
import '../../css/q/q0-dmmbeh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j56joab-t"/><path clip-rule="evenodd" class="zxz6ve1il"/><path class="q0-dmmbeh"/></g>`,
		"fallback": "healthicons:ambulance2x-outline",
	});
}

export default Component;
