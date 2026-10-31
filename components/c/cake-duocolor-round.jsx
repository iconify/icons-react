import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y8pz_j_an.css';
import '../../css/m/mhampu3tz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="y8pz_j_an"/><path class="mhampu3tz"/></g>`,
		"fallback": "coolicons:cake-duocolor-round",
	});
}

export default Component;
