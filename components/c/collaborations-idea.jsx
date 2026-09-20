import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nt1847b2n.css';
import '../../css/i/i5x355b3b.css';
import '../../css/k/kjklail5k.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nt1847b2n"/><path class="i5x355b3b"/><path class="kjklail5k"/></g>`,
		"fallback": "streamline-color:collaborations-idea",
	});
}

export default Component;
