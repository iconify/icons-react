import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/npixvev1d.css';
import '../../css/m/m0ep4mc0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="npixvev1d"/><path class="m0ep4mc0j"/></g>`,
		"fallback": "coolicons:gallery-duocolor-round",
	});
}

export default Component;
