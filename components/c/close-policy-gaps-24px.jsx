import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/alc186bpr.css';
import '../../css/s/s5iqn736v.css';
import '../../css/l/l65nnu6hm.css';
import '../../css/n/nqv10_xmu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="alc186bpr"/><path class="s5iqn736v"/><path class="l65nnu6hm"/><path class="nqv10_xmu"/></g>`,
		"fallback": "healthicons:close-policy-gaps-24px",
	});
}

export default Component;
