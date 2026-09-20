import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t8drw368i.css';
import '../../css/p/pfvayjbbu.css';
import '../../css/c/cxhoxcc8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="t8drw368i"/><path class="pfvayjbbu"/><path class="cxhoxcc8c"/></g>`,
		"fallback": "keyline-icons:accessibility-duotone",
	});
}

export default Component;
