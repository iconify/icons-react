import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fv5pcnpmp.css';
import '../../css/f/fp_x967xu.css';
import '../../css/x/xaq-f1ehc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fv5pcnpmp"/><path class="fp_x967xu"/><path class="xaq-f1ehc"/></g>`,
		"fallback": "tabler:brand-supernova",
	});
}

export default Component;
