import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kzt49156i.css';
import '../../css/s/swl0tk7xi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="kzt49156i"/><path class="swl0tk7xi"/></g>`,
		"fallback": "hugeicons:aids",
	});
}

export default Component;
