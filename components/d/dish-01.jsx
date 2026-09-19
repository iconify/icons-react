import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/a-ewwmb-z.css';
import '../../css/k/ky2hlvb_p.css';
import '../../css/b/b5modp-te.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="a-ewwmb-z"/><path class="ky2hlvb_p"/><path class="b5modp-te"/></g>`,
		"fallback": "hugeicons:dish-01",
	});
}

export default Component;
