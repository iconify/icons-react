import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/d_hoq-b3l.css';
import '../../css/c/cnnjisezc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="d_hoq-b3l"/><path class="cnnjisezc"/></g>`,
		"fallback": "solar:file-pen-outline",
	});
}

export default Component;
