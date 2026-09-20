import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/somcr4dof.css';
import '../../css/y/ythwd7b1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="somcr4dof"/><path class="ythwd7b1v"/></g>`,
		"fallback": "lucide:fingerprint-pattern",
	});
}

export default Component;
