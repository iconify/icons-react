import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xhipxm8ms.css';
import '../../css/y/yuyr3cbzg.css';
import '../../css/o/obc4ec60a.css';
import '../../css/c/c0iv2xb_l.css';
import '../../css/w/wkevs_28k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow xhipxm8ms"/><path class="yuyr3cbzg"/><path class="obc4ec60a"/><path class="c0iv2xb_l"/><path class="wkevs_28k"/></g>`,
		"fallback": "withicons-retro:black-cat",
	});
}

export default Component;
