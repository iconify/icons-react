import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/d-9bk_b_m.css';
import '../../css/w/wf2t-zq0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="d-9bk_b_m"/><path class="wf2t-zq0t"/></g>`,
		"fallback": "iconaut:helmet",
	});
}

export default Component;
