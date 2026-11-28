import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adm-aouqi.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wys62rbgd.css';
import '../../css/v/v0kt71byo.css';
import '../../css/o/oo4ydnuvq.css';
import '../../css/f/fo0pchbda.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="adm-aouqi secondary"/><g class="dt0cm9dhy primary"><path class="wys62rbgd"/><path class="v0kt71byo"/><path class="oo4ydnuvq"/><path class="fo0pchbda"/></g>`,
		"fallback": "iconaut:award-duo",
	});
}

export default Component;
