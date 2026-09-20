import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/l/lwenppemr.css';
import '../../css/b/bnct77q7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="lwenppemr"/><path class="bnct77q7n"/></g>`,
		"fallback": "reicon:briefcase7",
	});
}

export default Component;
