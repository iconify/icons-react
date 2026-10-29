import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/dy6f-b0he.css';
import '../../css/d/djl3n2rtw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="dy6f-b0he"/><path class="djl3n2rtw wm-a"/></g>`,
		"fallback": "withicons:cup-soda",
	});
}

export default Component;
