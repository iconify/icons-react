import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/elu4rivwl.css';
import '../../css/y/ycz06vb6l.css';
import '../../css/w/wxsot0b4m.css';
import '../../css/h/hd5dozlqz.css';
import '../../css/u/uft47zw7o.css';
import '../../css/r/re5zsvb-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="elu4rivwl wm-shadow"/><path class="ycz06vb6l"/><path class="wxsot0b4m"/><path class="hd5dozlqz"/><path class="uft47zw7o"/><path class="re5zsvb-n"/></g>`,
		"fallback": "withicons-retro:cable",
	});
}

export default Component;
