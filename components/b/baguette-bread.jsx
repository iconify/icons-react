import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eyf3f-bfc.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/l/lc32bsb7m.css';
import '../../css/g/gpkkzdb8h.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eyf3f-bfc"/><g class="ij2x_72vy"><path class="lc32bsb7m"/><path class="gpkkzdb8h"/></g>`,
		"fallback": "openmoji:baguette-bread",
	});
}

export default Component;
