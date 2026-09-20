import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x3rlb1bhp.css';
import '../../css/w/w_h69fh2g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="x3rlb1bhp"/><path class="w_h69fh2g"/></g>`,
		"fallback": "tabler:device-analytics",
	});
}

export default Component;
