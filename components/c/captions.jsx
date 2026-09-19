import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/fpdha5bjm.css';
import '../../css/t/tsj2tubdp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="fpdha5bjm"/><path class="tsj2tubdp"/></g>`,
		"fallback": "hugeicons:captions",
	});
}

export default Component;
