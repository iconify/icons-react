import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/t855s6tkv.css';
import '../../css/s/sp06is6bx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="t855s6tkv"/><path class="sp06is6bx"/></g>`,
		"fallback": "streamline-freehand:equalizer-bar-graph",
	});
}

export default Component;
