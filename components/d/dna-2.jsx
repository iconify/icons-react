import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r5d600b3o.css';
import '../../css/e/ehiy4lb2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="r5d600b3o"/><path class="ehiy4lb2f"/></g>`,
		"fallback": "tabler:dna-2",
	});
}

export default Component;
