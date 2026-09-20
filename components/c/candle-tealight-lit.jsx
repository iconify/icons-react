import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u_x2yob8p.css';
import '../../css/y/ylhnziwri.css';
import '../../css/e/eazdbabko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="u_x2yob8p"/><ellipse class="ylhnziwri"/><path class="eazdbabko"/></g>`,
		"fallback": "lucide-lab:candle-tealight-lit",
	});
}

export default Component;
