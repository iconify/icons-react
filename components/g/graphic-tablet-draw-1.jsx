import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lf-uhk1cd.css';
import '../../css/g/gc--qnmlf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="lf-uhk1cd"/><path class="gc--qnmlf"/></g>`,
		"fallback": "streamline-freehand:graphic-tablet-draw-1",
	});
}

export default Component;
