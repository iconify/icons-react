import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sk6txqizc.css';
import '../../css/w/wr5yqvscb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="sk6txqizc"/><path class="wr5yqvscb"/></g>`,
		"fallback": "tabler:camera-search",
	});
}

export default Component;
