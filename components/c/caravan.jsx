import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/n0o-7rbtu.css';
import '../../css/v/vuvruhbaa.css';
import '../../css/f/f3gxddcxc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="n0o-7rbtu"/><circle class="vuvruhbaa"/><path class="f3gxddcxc"/></g>`,
		"fallback": "hugeicons:caravan",
	});
}

export default Component;
