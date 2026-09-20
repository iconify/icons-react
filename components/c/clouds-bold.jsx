import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v8ug_cbjd.css';
import '../../css/t/tffmcf5dv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v8ug_cbjd"/><path class="tffmcf5dv"/></g>`,
		"fallback": "solar:clouds-bold",
	});
}

export default Component;
