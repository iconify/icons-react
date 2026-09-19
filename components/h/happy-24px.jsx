import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rl0p0lbfb.css';
import '../../css/s/s91cm4bif.css';
import '../../css/z/zso2mq8uq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rl0p0lbfb"/><path clip-rule="evenodd" class="s91cm4bif"/><path clip-rule="evenodd" class="zso2mq8uq"/></g>`,
		"fallback": "healthicons:happy-24px",
	});
}

export default Component;
