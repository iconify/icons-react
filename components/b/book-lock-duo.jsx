import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/omc_zcbqx.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mdipw5bzh.css';
import '../../css/m/m1ue8zbct.css';
import '../../css/a/axddwob9t.css';
import '../../css/n/nnui93btw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="omc_zcbqx secondary"/><g class="dt0cm9dhy primary"><path class="mdipw5bzh"/><path class="m1ue8zbct"/><path class="axddwob9t"/><path class="nnui93btw"/></g>`,
		"fallback": "iconaut:book-lock-duo",
	});
}

export default Component;
