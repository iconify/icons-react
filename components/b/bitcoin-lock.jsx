import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/s5vktnbeo.css';
import '../../css/a/av6x7t0ce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="s5vktnbeo"/><path class="av6x7t0ce"/></g>`,
		"fallback": "hugeicons:bitcoin-lock",
	});
}

export default Component;
