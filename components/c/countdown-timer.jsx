import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zalyfhbtm.css';
import '../../css/k/kchwjibkd.css';
import '../../css/a/ax3y5rb-s.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zalyfhbtm"/><path class="kchwjibkd"/><path class="ax3y5rb-s"/></g>`,
		"fallback": "streamline-flex-color:countdown-timer",
	});
}

export default Component;
