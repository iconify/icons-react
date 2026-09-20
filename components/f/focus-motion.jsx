import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qd37dccrn.css';
import '../../css/j/jplnoe0cc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qd37dccrn"/><path class="jplnoe0cc"/></g>`,
		"fallback": "streamline-freehand:focus-motion",
	});
}

export default Component;
