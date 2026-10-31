import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/a3ty376mn.css';
import '../../css/e/ei0e4xyhz.css';
import '../../css/a/ar8rpu7km.css';
import '../../css/s/sf94s0bss.css';
import '../../css/r/r2rqnl26l.css';
import '../../css/t/tfjvz1vxh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="a3ty376mn wm-shadow"/><path class="ei0e4xyhz"/><path class="ar8rpu7km"/><path class="sf94s0bss"/><path class="r2rqnl26l"/><path class="tfjvz1vxh"/></g>`,
		"fallback": "withicons-retro:heart-crack",
	});
}

export default Component;
