import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bradjz2xa.css';
import '../../css/q/q-zj-lxwm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bradjz2xa"/><path class="q-zj-lxwm"/></g>`,
		"fallback": "coolicons:bell-duotone-round",
	});
}

export default Component;
