import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/annqv0bpq.css';
import '../../css/m/myp8yacpy.css';
import '../../css/d/dqyzxxl_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="annqv0bpq"/><path class="myp8yacpy"/><path clip-rule="evenodd" class="dqyzxxl_g"/></g>`,
		"fallback": "solar:emoji-funny-circle-outline",
	});
}

export default Component;
