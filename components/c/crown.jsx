import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/elbfjcb4r.css';
import '../../css/u/u48862bgk.css';
import '../../css/a/af_02r1sn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="elbfjcb4r"/><path class="u48862bgk"/><path class="af_02r1sn"/></g>`,
		"fallback": "iconaut:crown",
	});
}

export default Component;
