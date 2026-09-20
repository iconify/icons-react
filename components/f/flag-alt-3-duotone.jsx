import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/svx5hwbxx.css';
import '../../css/c/c2ow5pb6l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="svx5hwbxx"/><path class="c2ow5pb6l"/></g>`,
		"fallback": "si:flag-alt-3-duotone",
	});
}

export default Component;
