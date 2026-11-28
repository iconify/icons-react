import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/w_f81jbsh.css';
import '../../css/e/e0snlgbex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="w_f81jbsh"/><path class="e0snlgbex"/></g>`,
		"fallback": "iconaut:indent-duo",
	});
}

export default Component;
