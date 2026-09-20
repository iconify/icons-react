import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t7oqcdc7h.css';
import '../../css/p/pzhyqnvll.css';
import '../../css/u/ucbq0fb6x.css';
import '../../css/x/x8l1_cc-j.css';
import '../../css/j/jhh77n9wj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t7oqcdc7h"/><path class="pzhyqnvll"/><path class="ucbq0fb6x"/><path class="x8l1_cc-j"/><path class="jhh77n9wj"/></g>`,
		"fallback": "streamline-cyber-color:gas-station",
	});
}

export default Component;
