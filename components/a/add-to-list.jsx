import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qu--rmhzd.css';
import '../../css/u/uhmqfabia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qu--rmhzd"/><path class="uhmqfabia"/></g>`,
		"fallback": "hugeicons:add-to-list",
	});
}

export default Component;
