import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/i/i8jsult2w.css';
import '../../css/v/v5jdyxbhx.css';
import '../../css/g/gs99q5biw.css';
import '../../css/h/hayg57blh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="i8jsult2w wm-deco"/><path class="v5jdyxbhx wm-deco"/><path class="gs99q5biw wm-k"/><path class="hayg57blh wm-a"/></g>`,
		"fallback": "withicons:briefcase-medical-blueprint",
	});
}

export default Component;
