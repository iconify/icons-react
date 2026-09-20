import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/we-qq-bzn.css';
import '../../css/l/lc-ga2-jf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="we-qq-bzn"/><path class="lc-ga2-jf"/></g>`,
		"fallback": "reicon:cloud-storage-filled",
	});
}

export default Component;
