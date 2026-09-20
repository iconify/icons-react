import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hhy8x5i5g.css';
import '../../css/y/y8ka4lbjg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="hhy8x5i5g"/><path class="y8ka4lbjg"/></g>`,
		"fallback": "streamline-freehand:charging-battery-flash-connected",
	});
}

export default Component;
