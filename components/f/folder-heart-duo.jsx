import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m5rq1-xng.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/tgy8uab8v.css';
import '../../css/u/uis561t1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m5rq1-xng secondary"/><g class="dt0cm9dhy primary"><path class="tgy8uab8v"/><path class="uis561t1b"/></g>`,
		"fallback": "iconaut:folder-heart-duo",
	});
}

export default Component;
