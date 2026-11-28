import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mie31z6an.css';
import '../../css/w/w4jltwbgn.css';
import '../../css/z/zrlh-6b7n.css';
import '../../css/b/btfp0bc-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="mie31z6an"/><path class="w4jltwbgn"/><path class="zrlh-6b7n"/><path class="btfp0bc-n"/></g>`,
		"fallback": "iconaut:dice-three",
	});
}

export default Component;
