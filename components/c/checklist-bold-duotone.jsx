import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yuh3c-bdf.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/h/h_oi-tcog.css';
import '../../css/z/zsdc5-17y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="yuh3c-bdf"/><g class="mc2zb0bvp"><path class="h_oi-tcog"/><path class="zsdc5-17y"/></g></g>`,
		"fallback": "solar:checklist-bold-duotone",
	});
}

export default Component;
