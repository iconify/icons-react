import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/j4o-a_bwo.css';
import '../../css/j/jr80t4bmv.css';
import '../../css/w/w5rbi4b7i.css';
import '../../css/d/dzisvcf_v.css';
import '../../css/d/db919-xvy.css';
import '../../css/z/zf95t_bdh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="j4o-a_bwo"/><path class="jr80t4bmv"/><path class="w5rbi4b7i"/><path class="dzisvcf_v"/><path class="db919-xvy"/><path class="zf95t_bdh"/></g>`,
		"fallback": "iconaut:bus-front",
	});
}

export default Component;
