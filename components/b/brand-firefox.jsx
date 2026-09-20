import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/af6_fhrzc.css';
import '../../css/u/uhi561fwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="af6_fhrzc"/><path class="uhi561fwi"/></g>`,
		"fallback": "tabler:brand-firefox",
	});
}

export default Component;
