import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lw79mfk2v.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mdipw5bzh.css';
import '../../css/m/m1ue8zbct.css';
import '../../css/v/vmu_hmryr.css';
import '../../css/h/h-32pdodc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lw79mfk2v secondary"/><g class="dt0cm9dhy primary"><path class="mdipw5bzh"/><path class="m1ue8zbct"/><path class="vmu_hmryr"/><path class="h-32pdodc"/></g>`,
		"fallback": "iconaut:book-user-duo",
	});
}

export default Component;
