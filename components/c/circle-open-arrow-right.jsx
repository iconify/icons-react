import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/ms2so3bsf.css';
import '../../css/j/jhwgfdc9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ms2so3bsf"/><path class="jhwgfdc9u"/></g>`,
		"fallback": "tabler:circle-open-arrow-right",
	});
}

export default Component;
