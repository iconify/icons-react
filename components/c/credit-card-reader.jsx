import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e7s09n3_x.css';
import '../../css/j/j0j5xg_mz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="e7s09n3_x"/><path class="j0j5xg_mz"/></g>`,
		"fallback": "lucide:credit-card-reader",
	});
}

export default Component;
