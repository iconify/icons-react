import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/ky_fwf62h.css';
import '../../css/v/vgr4z6bwb.css';
import '../../css/h/h0i813b-n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ky_fwf62h"/><path class="vgr4z6bwb"/><path clip-rule="evenodd" class="h0i813b-n"/></g>`,
		"fallback": "healthicons:blood-a-p-outline",
	});
}

export default Component;
