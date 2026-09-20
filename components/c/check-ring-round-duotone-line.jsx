import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yvsj4rbkk.css';
import '../../css/c/cmue_hx5w.css';
import '../../css/y/y-z2zvtpc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="yvsj4rbkk"/><path class="cmue_hx5w"/><path class="y-z2zvtpc"/></g>`,
		"fallback": "lets-icons:check-ring-round-duotone-line",
	});
}

export default Component;
