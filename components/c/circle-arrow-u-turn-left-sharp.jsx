import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/l/l-1ucdbni.css';
import '../../css/c/c9fgw67kl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="l-1ucdbni"/><path class="c9fgw67kl"/></g>`,
		"fallback": "keyline-icons:circle-arrow-u-turn-left-sharp",
	});
}

export default Component;
