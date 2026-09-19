import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kc-lfrb0i.css';
import '../../css/f/fz9vu96sc.css';
import '../../css/w/way4u1f4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="kc-lfrb0i"/><path class="fz9vu96sc"/><path class="way4u1f4m"/></g>`,
		"fallback": "hugeicons:ai-setting",
	});
}

export default Component;
