import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pxp524bfr.css';
import '../../css/p/pp8tacb2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pxp524bfr"/><path class="pp8tacb2h"/></g>`,
		"fallback": "lucide:file-pen-line",
	});
}

export default Component;
