import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f9f712xji.css';
import '../../css/g/gc65e_bcj.css';
import '../../css/o/o3umnd9gz.css';
import '../../css/f/f-ijmyb5m.css';
import '../../css/j/j11jiotsr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f9f712xji"/><path class="gc65e_bcj"/><path class="o3umnd9gz"/><path class="f-ijmyb5m"/><path class="j11jiotsr"/></g>`,
		"fallback": "solar:gamepad-old-bold-duotone",
	});
}

export default Component;
