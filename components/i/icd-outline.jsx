import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/otw5jg97e.css';
import '../../css/k/kcy22cc0q.css';
import '../../css/v/vfc_tmbcn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="otw5jg97e"/><path clip-rule="evenodd" class="kcy22cc0q"/><path clip-rule="evenodd" class="vfc_tmbcn"/></g>`,
		"fallback": "healthicons:icd-outline",
	});
}

export default Component;
