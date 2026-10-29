import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/fcet6cbve.css';
import '../../css/m/meogk_ylc.css';
import '../../css/m/me3qcxbaj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="fcet6cbve"/><path class="meogk_ylc wm-a"/><path class="me3qcxbaj"/></g>`,
		"fallback": "withicons:bookmark-check-duo",
	});
}

export default Component;
