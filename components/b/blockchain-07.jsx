import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/t4106lyme.css';
import '../../css/q/q_ucgqv8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="t4106lyme"/><path class="q_ucgqv8i"/></g>`,
		"fallback": "hugeicons:blockchain-07",
	});
}

export default Component;
