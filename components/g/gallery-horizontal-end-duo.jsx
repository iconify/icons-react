import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/au00--b_v.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/e090hdc7h.css';
import '../../css/y/ylliqbbkc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="au00--b_v secondary"/><g class="dt0cm9dhy primary"><path class="e090hdc7h"/><path class="ylliqbbkc"/></g>`,
		"fallback": "iconaut:gallery-horizontal-end-duo",
	});
}

export default Component;
