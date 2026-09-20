import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xzv6aobvf.css';
import '../../css/l/lrj0_fb8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xzv6aobvf"/><path class="lrj0_fb8b"/></g>`,
		"fallback": "reicon:black-hole2-duotone",
	});
}

export default Component;
