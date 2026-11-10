import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nlnt1x7hp.css';
import '../../css/z/zam9kl6gm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nlnt1x7hp"/><path class="zam9kl6gm"/></g>`,
		"fallback": "andrsrxn:dashboard",
	});
}

export default Component;
