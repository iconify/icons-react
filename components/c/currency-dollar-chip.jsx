import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/an_1ctx0c.css';
import '../../css/o/ol631m2wi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="an_1ctx0c"/><path class="ol631m2wi"/></g>`,
		"fallback": "streamline-freehand:currency-dollar-chip",
	});
}

export default Component;
