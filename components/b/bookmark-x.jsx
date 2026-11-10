import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/ke5ihkl0n.css';
import '../../css/q/qfzg3f4uh.css';
import '../../css/q/qojmgs-3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ke5ihkl0n"/><path class="qfzg3f4uh"/><path class="qojmgs-3i"/></g>`,
		"fallback": "andrsrxn:bookmark-x",
	});
}

export default Component;
