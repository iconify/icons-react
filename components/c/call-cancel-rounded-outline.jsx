import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nhjf0wwpk.css';
import '../../css/b/bkvdjbb0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nhjf0wwpk"/><path clip-rule="evenodd" class="bkvdjbb0j"/></g>`,
		"fallback": "solar:call-cancel-rounded-outline",
	});
}

export default Component;
