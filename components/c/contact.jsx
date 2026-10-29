import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gfb62bt5g.css';
import '../../css/c/ck_6qidwg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="gfb62bt5g"/><path class="ck_6qidwg wm-a"/></g>`,
		"fallback": "withicons:contact",
	});
}

export default Component;
