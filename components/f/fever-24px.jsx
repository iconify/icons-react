import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ucim6lbjm.css';
import '../../css/w/w98ih1blg.css';
import '../../css/d/dbz_4sb8l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ucim6lbjm"/><path class="w98ih1blg"/><path class="dbz_4sb8l"/></g>`,
		"fallback": "healthicons:fever-24px",
	});
}

export default Component;
