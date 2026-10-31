import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xzym0db4o.css';
import '../../css/j/jvihx94wh.css';
import '../../css/w/w9de7tfvg.css';
import '../../css/w/w1tousf3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow xzym0db4o"/><path class="jvihx94wh"/><path class="w9de7tfvg"/><path class="w1tousf3l"/></g>`,
		"fallback": "withicons-retro:dhak",
	});
}

export default Component;
