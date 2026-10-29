import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jm-h8ebfd.css';
import '../../css/f/fzlatcc_e.css';
import '../../css/t/t048yihdc.css';
import '../../css/l/lap-h8eft.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="jm-h8ebfd"/><path class="fzlatcc_e wm-a"/><path class="t048yihdc"/><path class="lap-h8eft"/></g>`,
		"fallback": "withicons:door-open-duo",
	});
}

export default Component;
