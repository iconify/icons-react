import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h8c6_sbje.css';
import '../../css/r/rns1rzbsq.css';
import '../../css/d/di1kr24ia.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h8c6_sbje"/><path class="rns1rzbsq"/><path class="di1kr24ia"/></g>`,
		"fallback": "streamline-flex-color:dog-1",
	});
}

export default Component;
