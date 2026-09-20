import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/puq3pabjk.css';
import '../../css/g/g_cq3bctl.css';
import '../../css/p/p9oxf0bgl.css';
import '../../css/n/nh5il_a1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="puq3pabjk"/><path class="g_cq3bctl"/><circle class="p9oxf0bgl"/><path class="nh5il_a1p"/></g>`,
		"fallback": "proicons:book-info-2",
	});
}

export default Component;
