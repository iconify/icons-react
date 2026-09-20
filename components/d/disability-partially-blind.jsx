import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/urhsxtg1v.css';
import '../../css/t/tmwyrmbys.css';
import '../../css/q/qzydosbgo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="urhsxtg1v"/><path class="tmwyrmbys"/><path class="qzydosbgo"/></g>`,
		"fallback": "streamline-freehand:disability-partially-blind",
	});
}

export default Component;
