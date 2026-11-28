import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hg3dien2s.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mdipw5bzh.css';
import '../../css/m/m1ue8zbct.css';
import '../../css/o/o94h5sbfw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hg3dien2s secondary"/><g class="dt0cm9dhy primary"><path class="mdipw5bzh"/><path class="m1ue8zbct"/><path class="o94h5sbfw"/></g>`,
		"fallback": "iconaut:book-heart-duo",
	});
}

export default Component;
