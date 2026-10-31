import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/ka-qtkb4d.css';
import '../../css/q/qvzv9oblh.css';
import '../../css/e/ex4u0xenq.css';
import '../../css/j/jqa4fi03f.css';
import '../../css/j/jxwam-bev.css';
import '../../css/n/nohpz5b2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ka-qtkb4d wm-shadow"/><path class="qvzv9oblh"/><path class="ex4u0xenq"/><path class="jqa4fi03f"/><path class="jxwam-bev wm-s"/><path class="nohpz5b2t"/></g>`,
		"fallback": "withicons-retro:bomb",
	});
}

export default Component;
