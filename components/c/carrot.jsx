import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fdka27b0c.css';
import '../../css/s/sw--0cc3b.css';
import '../../css/i/iecti-bfl.css';
import '../../css/z/z1snilbue.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fdka27b0c"/><path class="sw--0cc3b"/><path class="iecti-bfl"/><path class="z1snilbue"/></g>`,
		"fallback": "streamline-flex-color:carrot",
	});
}

export default Component;
