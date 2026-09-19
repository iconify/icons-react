import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/syqwyou8e.css';
import '../../css/k/kvzo1egcq.css';
import '../../css/i/iycsllbsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="syqwyou8e"/><path class="kvzo1egcq"/><path class="iycsllbsf"/></g>`,
		"fallback": "hugeicons:bitcoin-target",
	});
}

export default Component;
