import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ewmg4r3tq.css';
import '../../css/q/qg0y-nz9x.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ewmg4r3tq"/><path class="qg0y-nz9x"/></g>`,
		"fallback": "streamline-color:hand-grab",
	});
}

export default Component;
