import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/m9gx7_bse.css';
import '../../css/s/sjfvlcc8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="m9gx7_bse"/><path class="sjfvlcc8m"/></g>`,
		"fallback": "hugeicons:column-insert",
	});
}

export default Component;
