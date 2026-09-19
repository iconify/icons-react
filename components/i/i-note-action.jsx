import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l0tam7c8i.css';
import '../../css/m/m95ak_ixu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="l0tam7c8i"/><path class="m95ak_ixu"/></g>`,
		"fallback": "healthicons:i-note-action",
	});
}

export default Component;
