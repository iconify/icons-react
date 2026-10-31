import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xp1k08cdt.css';
import '../../css/z/zp0xmmxkd.css';
import '../../css/w/wxjatbcgy.css';
import '../../css/n/n879rtbch.css';
import '../../css/r/rze47ib2l.css';
import '../../css/y/y3a2h-b5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow xp1k08cdt"/><path class="zp0xmmxkd"/><path class="wxjatbcgy"/><path class="n879rtbch"/><path class="rze47ib2l"/><path class="y3a2h-b5x"/></g>`,
		"fallback": "withicons-retro:disc",
	});
}

export default Component;
