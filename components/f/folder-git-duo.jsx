import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q61-7objl.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/tgy8uab8v.css';
import '../../css/f/f--m_xh5c.css';
import '../../css/a/aqs88acua.css';
import '../../css/r/ru-4-70ld.css';
import '../../css/x/xa1xo_bwh.css';
import '../../css/e/ep9s8neke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q61-7objl secondary"/><g class="dt0cm9dhy primary"><path class="tgy8uab8v"/><path class="f--m_xh5c"/><path class="aqs88acua"/><path class="ru-4-70ld"/><path class="xa1xo_bwh"/><path class="ep9s8neke"/></g>`,
		"fallback": "iconaut:folder-git-duo",
	});
}

export default Component;
