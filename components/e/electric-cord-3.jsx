import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hlz4ghbzm.css';
import '../../css/o/owx1-kbkf.css';
import '../../css/m/mbu6rsbxe.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hlz4ghbzm"/><path class="owx1-kbkf"/><path class="mbu6rsbxe"/></g>`,
		"fallback": "streamline-color:electric-cord-3",
	});
}

export default Component;
