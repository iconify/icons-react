import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/r6hb92bmg.css';
import '../../css/c/cwmc7s4wk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="r6hb92bmg"/><path class="cwmc7s4wk"/></g>`,
		"fallback": "streamline-sharp:bell-set-timer",
	});
}

export default Component;
