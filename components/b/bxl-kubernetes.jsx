import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4zh9ut5i.css';
import '../../css/j/jumj_bc-f.css';
import '../../css/a/aww_3tzev.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q4zh9ut5i"/><path class="jumj_bc-f"/><path class="aww_3tzev"/>`,
		"fallback": "bx:bxl-kubernetes",
	});
}

export default Component;
