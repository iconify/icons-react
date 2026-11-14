import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/u0fgibbvn.css';
import '../../css/j/j_u3vybip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="u0fgibbvn"/><path class="j_u3vybip"/></g>`,
		"fallback": "hugeicons:call-missed-03",
	});
}

export default Component;
