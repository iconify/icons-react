import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nr5-fvb4m.css';
import '../../css/x/xkf2v44at.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="nr5-fvb4m"/><path class="xkf2v44at"/></g>`,
		"fallback": "solar:case-round-outline",
	});
}

export default Component;
