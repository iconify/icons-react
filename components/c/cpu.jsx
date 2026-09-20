import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cix-dhq9l.css';
import '../../css/d/dzw9pdpsm.css';
import '../../css/w/wo_l12vvi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cix-dhq9l"/><rect class="dzw9pdpsm"/><path class="wo_l12vvi"/></g>`,
		"fallback": "lets-icons:cpu",
	});
}

export default Component;
