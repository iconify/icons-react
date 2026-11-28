import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/f5y0ncbja.css';
import '../../css/e/e3q26l_2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="f5y0ncbja"/><path class="e3q26l_2f"/></g>`,
		"fallback": "iconaut:chevron-double-down-duo",
	});
}

export default Component;
