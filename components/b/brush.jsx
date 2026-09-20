import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/sjx_u5vdi.css';
import '../../css/t/tseqcgbor.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="sjx_u5vdi"/><path vector-effect="non-scaling-stroke" class="tseqcgbor"/></g>`,
		"fallback": "wordpress:brush",
	});
}

export default Component;
