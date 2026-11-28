import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c8pgx56lc.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qw5ydqobj.css';
import '../../css/q/qlxmydb_k.css';
import '../../css/h/h-p1tzb1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c8pgx56lc secondary"/><g class="dt0cm9dhy primary"><path class="qw5ydqobj"/><path class="qlxmydb_k"/><path class="h-p1tzb1i"/></g>`,
		"fallback": "iconaut:hospital-duo",
	});
}

export default Component;
