import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q42bmpxxd.css';
import '../../css/c/cbe2i_bnv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="q42bmpxxd"/><path class="cbe2i_bnv"/></g>`,
		"fallback": "lucide:cloud-check",
	});
}

export default Component;
