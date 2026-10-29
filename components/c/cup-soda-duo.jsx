import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/nhak0acaa.css';
import '../../css/d/djl3n2rtw.css';
import '../../css/d/dy6f-b0he.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="nhak0acaa"/><path class="djl3n2rtw wm-a"/><path class="dy6f-b0he"/></g>`,
		"fallback": "withicons:cup-soda-duo",
	});
}

export default Component;
