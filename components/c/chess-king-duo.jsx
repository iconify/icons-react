import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dvuuooufu.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/u1xbpzeux.css';
import '../../css/k/kbxpyqdun.css';
import '../../css/g/gs05fwbhe.css';
import '../../css/z/ztl4i1bdu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dvuuooufu secondary"/><g class="dt0cm9dhy primary"><path class="u1xbpzeux"/><path class="kbxpyqdun"/><path class="gs05fwbhe"/><path class="ztl4i1bdu"/></g>`,
		"fallback": "iconaut:chess-king-duo",
	});
}

export default Component;
