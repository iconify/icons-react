import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jgktazfdt.css';
import '../../css/j/jvl9yi_dy.css';
import '../../css/r/rkhwyvbrn.css';
import '../../css/i/ikksi9dlb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="jgktazfdt"/><path class="jvl9yi_dy"/><path class="rkhwyvbrn"/><path class="ikksi9dlb"/></g>`,
		"fallback": "hugeicons:customer-service-02",
	});
}

export default Component;
