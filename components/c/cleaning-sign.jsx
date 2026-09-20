import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qn98e6pwu.css';
import '../../css/l/lqs-r4bur.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qn98e6pwu"/><path class="lqs-r4bur"/></g>`,
		"fallback": "streamline-freehand:cleaning-sign",
	});
}

export default Component;
