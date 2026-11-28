import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oipivpcyv.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mdipw5bzh.css';
import '../../css/m/m1ue8zbct.css';
import '../../css/g/gvvxt_2nw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oipivpcyv secondary"/><g class="dt0cm9dhy primary"><path class="mdipw5bzh"/><path class="m1ue8zbct"/><path class="gvvxt_2nw"/></g>`,
		"fallback": "iconaut:book-marked-duo",
	});
}

export default Component;
