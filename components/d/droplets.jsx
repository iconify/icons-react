import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ixogiuakh.css';
import '../../css/r/rqf3ibcsb.css';
import '../../css/u/ucljogcuz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ixogiuakh"/><path class="rqf3ibcsb"/><path class="ucljogcuz"/></g>`,
		"fallback": "andrsrxn:droplets",
	});
}

export default Component;
