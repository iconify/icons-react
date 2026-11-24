import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t57kox8ac.css';
import '../../css/f/fmf1og6np.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="t57kox8ac"/><path class="fmf1og6np"/></g>`,
		"fallback": "tabler:building-hospital-pin",
	});
}

export default Component;
