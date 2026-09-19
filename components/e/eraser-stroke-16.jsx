import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/r/rh2ocrb7y.css';
import '../../css/s/squ55obdc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><rect transform="rotate(-45 8 8)" class="rh2ocrb7y"/><path class="squ55obdc"/></g>`,
		"fallback": "garden:eraser-stroke-16",
	});
}

export default Component;
