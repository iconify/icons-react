import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e-_-_kbvf.css';
import '../../css/c/cvlja07mu.css';
import '../../css/l/l-qb1ac7n.css';
import '../../css/v/ves06kicb.css';
import '../../css/d/d56vptb9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e-_-_kbvf"/><path class="cvlja07mu"/><path class="l-qb1ac7n"/><path class="ves06kicb"/><path class="d56vptb9f"/></g>`,
		"fallback": "andrsrxn:briefcase-forklift",
	});
}

export default Component;
