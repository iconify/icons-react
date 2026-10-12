import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/ry62_ccfj.css';
import '../../css/n/no24npb0h.css';
import '../../css/w/wx1pd_bam.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="ry62_ccfj"/><rect class="no24npb0h"/><path class="wx1pd_bam"/></g>`,
		"fallback": "andrsrxn:background",
	});
}

export default Component;
