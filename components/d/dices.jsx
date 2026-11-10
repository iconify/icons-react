import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lbwmvmcyq.css';
import '../../css/p/p949b0bdu.css';
import '../../css/v/vevgdksff.css';
import '../../css/c/cq3h1kldg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lbwmvmcyq"/><path class="p949b0bdu"/><path class="vevgdksff"/><path class="cq3h1kldg"/></g>`,
		"fallback": "andrsrxn:dices",
	});
}

export default Component;
