import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gmj1iqb4q.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/hocq69i_x.css';
import '../../css/k/kb5bn2cqb.css';
import '../../css/f/f2sg_309u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gmj1iqb4q secondary"/><g class="dt0cm9dhy primary"><path class="hocq69i_x"/><path class="kb5bn2cqb"/><path class="f2sg_309u"/></g>`,
		"fallback": "iconaut:align-vertical-space-between-duo",
	});
}

export default Component;
