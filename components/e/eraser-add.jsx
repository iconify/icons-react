import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/cfq_bvzpb.css';
import '../../css/s/sg3hacblk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="cfq_bvzpb"/><path class="sg3hacblk"/></g>`,
		"fallback": "hugeicons:eraser-add",
	});
}

export default Component;
