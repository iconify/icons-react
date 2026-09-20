import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u-0v-ccut.css';
import '../../css/z/z5e0pyj_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="u-0v-ccut"/><path class="z5e0pyj_j"/></g>`,
		"fallback": "tabler:arrow-ramp-left-2",
	});
}

export default Component;
