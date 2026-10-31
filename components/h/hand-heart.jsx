import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/cyzpj9jee.css';
import '../../css/q/ql7uiwbhy.css';
import '../../css/h/hr7gqhxqi.css';
import '../../css/i/ikfu4upyn.css';
import '../../css/r/rjodl_mhg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="cyzpj9jee wm-shadow"/><path class="ql7uiwbhy"/><path class="hr7gqhxqi"/><path class="ikfu4upyn"/><path class="rjodl_mhg"/></g>`,
		"fallback": "withicons-retro:hand-heart",
	});
}

export default Component;
