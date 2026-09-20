import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vg4g9pbqj.css';
import '../../css/m/mle8gqb2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vg4g9pbqj"/><path class="mle8gqb2y"/></g>`,
		"fallback": "tabler:browser-check",
	});
}

export default Component;
