import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_oj2pm_r.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/us6kxt9tp.css';
import '../../css/g/gws5glbsp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q_oj2pm_r secondary"/><g class="dt0cm9dhy primary"><path class="us6kxt9tp"/><path class="gws5glbsp"/></g>`,
		"fallback": "iconaut:badge-check-duo",
	});
}

export default Component;
