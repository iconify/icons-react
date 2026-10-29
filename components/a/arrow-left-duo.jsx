import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/v2_g7vh0j.css';
import '../../css/j/j4rbwib9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="v2_g7vh0j"/><path class="j4rbwib9r wm-a"/></g>`,
		"fallback": "withicons:arrow-left-duo",
	});
}

export default Component;
