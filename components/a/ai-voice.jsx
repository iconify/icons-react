import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/aoyp9dakm.css';
import '../../css/g/gsqgu0jll.css';
import '../../css/c/ck_xl9uch.css';
import '../../css/k/ki8vvacfa.css';
import '../../css/z/zsr414bds.css';
import '../../css/c/c9u2s_lcm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="aoyp9dakm"/><path class="gsqgu0jll"/><path class="ck_xl9uch"/><path class="ki8vvacfa"/><path class="zsr414bds"/><path class="c9u2s_lcm"/></g>`,
		"fallback": "iconaut:ai-voice",
	});
}

export default Component;
