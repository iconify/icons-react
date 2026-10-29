import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/isb-x7b4z.css';
import '../../css/s/s1afeeb0i.css';
import '../../css/t/t24d_rbut.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="isb-x7b4z"/><path class="s1afeeb0i wm-a"/><path class="t24d_rbut"/></g>`,
		"fallback": "withicons:code-duo",
	});
}

export default Component;
