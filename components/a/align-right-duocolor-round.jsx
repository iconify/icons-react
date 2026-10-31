import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h3ynmu6py.css';
import '../../css/y/ydmp8rb4e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="h3ynmu6py"/><path class="ydmp8rb4e"/></g>`,
		"fallback": "coolicons:align-right-duocolor-round",
	});
}

export default Component;
