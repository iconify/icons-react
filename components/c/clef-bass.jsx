import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cnlu5zbty.css';
import '../../css/o/odesvlbsr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cnlu5zbty"/><circle class="odesvlbsr"/></g>`,
		"fallback": "lucide:clef-bass",
	});
}

export default Component;
