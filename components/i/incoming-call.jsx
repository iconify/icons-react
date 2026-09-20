import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ij-gazftr.css';
import '../../css/p/ppmkhkb_o.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ij-gazftr"/><path class="ppmkhkb_o"/></g>`,
		"fallback": "streamline-color:incoming-call",
	});
}

export default Component;
