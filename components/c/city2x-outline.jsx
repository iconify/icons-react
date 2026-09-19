import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k360nwb0k.css';
import '../../css/c/clgxr-12w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k360nwb0k"/><path clip-rule="evenodd" class="clgxr-12w"/></g>`,
		"fallback": "healthicons:city2x-outline",
	});
}

export default Component;
