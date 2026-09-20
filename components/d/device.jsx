import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fftf10baj.css';
import '../../css/b/bb0qc8mtr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fftf10baj"/><path class="bb0qc8mtr"/></g>`,
		"fallback": "rivet-icons:device",
	});
}

export default Component;
