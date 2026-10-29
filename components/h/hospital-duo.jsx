import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/c1fw99ysd.css';
import '../../css/f/f3tafbb9x.css';
import '../../css/z/zbsyr1dde.css';
import '../../css/f/fu-yhsexq.css';
import '../../css/m/m9fy4_0ed.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="c1fw99ysd"/><path class="f3tafbb9x wm-a"/><path class="zbsyr1dde"/><path class="fu-yhsexq"/><path class="m9fy4_0ed wm-a"/></g>`,
		"fallback": "withicons:hospital-duo",
	});
}

export default Component;
