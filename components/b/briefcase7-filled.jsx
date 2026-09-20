import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wv3t6jbsm.css';
import '../../css/z/z_4mkx7et.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wv3t6jbsm"/><path class="z_4mkx7et"/></g>`,
		"fallback": "reicon:briefcase7-filled",
	});
}

export default Component;
