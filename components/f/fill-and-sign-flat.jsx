import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qu86w4bvc.css';
import '../../css/a/a4e97ibqx.css';
import '../../css/q/qqswkobpk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qu86w4bvc"/><path class="a4e97ibqx"/><path clip-rule="evenodd" class="qqswkobpk"/></g>`,
		"fallback": "streamline-plump-color:fill-and-sign-flat",
	});
}

export default Component;
