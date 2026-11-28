import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h5jr_abqe.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mdipw5bzh.css';
import '../../css/m/m1ue8zbct.css';
import '../../css/a/a3lx80b1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h5jr_abqe secondary"/><g class="dt0cm9dhy primary"><path class="mdipw5bzh"/><path class="m1ue8zbct"/><path class="a3lx80b1s"/></g>`,
		"fallback": "iconaut:book-x-duo",
	});
}

export default Component;
