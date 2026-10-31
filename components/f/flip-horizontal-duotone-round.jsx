import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p27-ljoqn.css';
import '../../css/j/ji6b9qbdp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p27-ljoqn"/><path class="ji6b9qbdp"/></g>`,
		"fallback": "coolicons:flip-horizontal-duotone-round",
	});
}

export default Component;
