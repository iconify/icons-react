import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/e8svjubwx.css';
import '../../css/y/yp_rturvk.css';
import '../../css/z/z41wlabfg.css';
import '../../css/q/q2uypiboo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="e8svjubwx"/><path class="yp_rturvk"/><path class="z41wlabfg"/><path class="q2uypiboo"/></g>`,
		"fallback": "iconaut:health-potion",
	});
}

export default Component;
