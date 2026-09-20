import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/klm6q6ngg.css';
import '../../css/q/qyiva8bnv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="klm6q6ngg"/><path class="qyiva8bnv"/></g>`,
		"fallback": "si:bluetooth-duotone",
	});
}

export default Component;
