import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ao-ogrrvi.css';
import '../../css/e/e15jp5xgs.css';
import '../../css/v/vn6aygsxu.css';
import '../../css/t/t12e08b0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ao-ogrrvi"/><path class="e15jp5xgs"/><path class="vn6aygsxu"/><path class="t12e08b0j"/></g>`,
		"fallback": "solar:emoji-funny-square-bold-duotone",
	});
}

export default Component;
