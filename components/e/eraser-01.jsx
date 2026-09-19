import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/cfq_bvzpb.css';
import '../../css/a/aej7ajbbn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="cfq_bvzpb"/><path class="aej7ajbbn"/></g>`,
		"fallback": "hugeicons:eraser-01",
	});
}

export default Component;
