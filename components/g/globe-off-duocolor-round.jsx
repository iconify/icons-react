import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/axcf-wb4p.css';
import '../../css/y/y1fmdxbwm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="axcf-wb4p"/><path class="y1fmdxbwm"/></g>`,
		"fallback": "coolicons:globe-off-duocolor-round",
	});
}

export default Component;
