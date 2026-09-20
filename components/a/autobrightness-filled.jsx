import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wjc_1vbds.css';
import '../../css/s/s4pst4hgm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wjc_1vbds"/><path class="s4pst4hgm"/></g>`,
		"fallback": "reicon:autobrightness-filled",
	});
}

export default Component;
