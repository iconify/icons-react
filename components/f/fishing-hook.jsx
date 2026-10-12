import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/itvoxn-mr.css';
import '../../css/h/hlvp9pbkt.css';
import '../../css/v/vb8aqjb1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="itvoxn-mr"/><path class="hlvp9pbkt"/><circle class="vb8aqjb1q"/></g>`,
		"fallback": "andrsrxn:fishing-hook",
	});
}

export default Component;
