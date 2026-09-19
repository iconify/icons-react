import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j8drh1bsr.css';
import '../../css/s/spwrv2-wm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="j8drh1bsr"/><path class="spwrv2-wm"/></g>`,
		"fallback": "griddy-icons:copy-all-filled",
	});
}

export default Component;
