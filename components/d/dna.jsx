import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/ii1_nvtpi.css';
import '../../css/u/uphrqe4xu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ii1_nvtpi"/><path class="uphrqe4xu"/></g>`,
		"fallback": "tabler:dna",
	});
}

export default Component;
