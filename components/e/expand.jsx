import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ye0iz3b5r.css';
import '../../css/n/nmtpwvozm.css';
import '../../css/j/julsx1adr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ye0iz3b5r"/><path class="nmtpwvozm"/><path class="julsx1adr"/></g>`,
		"fallback": "streamline-color:expand",
	});
}

export default Component;
