import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/t048yihdc.css';
import '../../css/l/lap-h8eft.css';
import '../../css/f/fzlatcc_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="t048yihdc"/><path class="lap-h8eft"/><path class="fzlatcc_e wm-a"/></g>`,
		"fallback": "withicons:door-open",
	});
}

export default Component;
