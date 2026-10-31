import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d53ospbbr.css';
import '../../css/r/r96z0tspi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="d53ospbbr"/><path class="r96z0tspi"/></g>`,
		"fallback": "coolicons:castle-duocolor-round",
	});
}

export default Component;
