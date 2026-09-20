import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/aems_ib3p.css';
import '../../css/x/x51-45-ay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="aems_ib3p"/><path class="x51-45-ay"/></g>`,
		"fallback": "majesticons:clipboard-check-line",
	});
}

export default Component;
