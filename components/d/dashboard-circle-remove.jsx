import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/cwobmmbvu.css';
import '../../css/e/e90-k_qvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="cwobmmbvu"/><path class="e90-k_qvj"/></g>`,
		"fallback": "hugeicons:dashboard-circle-remove",
	});
}

export default Component;
