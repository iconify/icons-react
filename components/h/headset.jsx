import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vagj0u3jv.css';
import '../../css/l/l5y5ijc_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="vagj0u3jv"/><path class="l5y5ijc_n"/></g>`,
		"fallback": "hugeicons:headset",
	});
}

export default Component;
