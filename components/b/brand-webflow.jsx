import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d5jbzvbdi.css';
import '../../css/c/cq4ngac1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="d5jbzvbdi"/><path class="cq4ngac1z"/></g>`,
		"fallback": "tabler:brand-webflow",
	});
}

export default Component;
