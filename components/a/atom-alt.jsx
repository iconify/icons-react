import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dftf9rvck.css';
import '../../css/q/qpzo5btlb.css';
import '../../css/o/o49t8rbju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="dftf9rvck"/><path class="qpzo5btlb"/><path class="o49t8rbju"/></g>`,
		"fallback": "lets-icons:atom-alt",
	});
}

export default Component;
