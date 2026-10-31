import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/o4eve3bgo.css';
import '../../css/q/q8fuhib4q.css';
import '../../css/n/nrxz91b6d.css';
import '../../css/l/lbcd-09tq.css';
import '../../css/s/sxw58cd2q.css';
import '../../css/d/dih0vgk0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="o4eve3bgo wm-shadow"/><path class="q8fuhib4q"/><path class="nrxz91b6d"/><path class="lbcd-09tq"/><path class="sxw58cd2q"/><path class="dih0vgk0v"/></g>`,
		"fallback": "withicons-retro:hard-hat",
	});
}

export default Component;
