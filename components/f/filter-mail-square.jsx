import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kyit_wccz.css';
import '../../css/b/bl-wuk3ho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="kyit_wccz"/><path class="bl-wuk3ho"/></g>`,
		"fallback": "hugeicons:filter-mail-square",
	});
}

export default Component;
