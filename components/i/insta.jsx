import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w1lxsfucb.css';
import '../../css/k/k0evexoqr.css';
import '../../css/l/l606hpblz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w1lxsfucb"/><circle class="k0evexoqr"/><circle class="l606hpblz"/></g>`,
		"fallback": "lets-icons:insta",
	});
}

export default Component;
