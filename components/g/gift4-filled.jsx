import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z465f0get.css';
import '../../css/o/o7ti_i51o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="z465f0get"/><path class="o7ti_i51o"/></g>`,
		"fallback": "reicon:gift4-filled",
	});
}

export default Component;
