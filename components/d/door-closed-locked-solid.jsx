import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kcwaiacdg.css';
import '../../css/k/kuhx-9bnt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kcwaiacdg"/><path class="kuhx-9bnt"/></g>`,
		"fallback": "mynaui:door-closed-locked-solid",
	});
}

export default Component;
