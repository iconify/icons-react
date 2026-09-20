import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/ue_n1y71q.css';
import '../../css/g/gq61baboz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ue_n1y71q"/><path vector-effect="non-scaling-stroke" class="gq61baboz"/></g>`,
		"fallback": "wordpress:drag-handle",
	});
}

export default Component;
