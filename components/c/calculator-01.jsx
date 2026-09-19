import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/f56xg1bhf.css';
import '../../css/s/swod1gpfm.css';
import '../../css/z/z1g_9wh2e.css';
import '../../css/k/k7lkoqbhp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="f56xg1bhf"/><path class="swod1gpfm"/><path class="z1g_9wh2e"/><path class="k7lkoqbhp"/></g>`,
		"fallback": "hugeicons:calculator-01",
	});
}

export default Component;
