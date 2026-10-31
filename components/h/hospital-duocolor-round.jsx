import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u7r7g1bwi.css';
import '../../css/u/ulwd839td.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="u7r7g1bwi"/><path class="ulwd839td"/></g>`,
		"fallback": "coolicons:hospital-duocolor-round",
	});
}

export default Component;
