import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wknr00bdm.css';
import '../../css/x/x104ezb-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="wknr00bdm"/><path class="x104ezb-p"/></g>`,
		"fallback": "streamline-freehand:disability-down-syndrome-ribbon",
	});
}

export default Component;
