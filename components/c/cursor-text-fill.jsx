import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vozyabbbg.css';
import '../../css/m/m8_plnbbr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vozyabbbg"/><path class="m8_plnbbr"/></g>`,
		"fallback": "keyline-icons:cursor-text-fill",
	});
}

export default Component;
