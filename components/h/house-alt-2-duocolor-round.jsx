import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/ra34vcrze.css';
import '../../css/g/gj6r29cyu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ra34vcrze"/><path class="gj6r29cyu"/></g>`,
		"fallback": "coolicons:house-alt-2-duocolor-round",
	});
}

export default Component;
