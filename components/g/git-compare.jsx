import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/k5msskbck.css';
import '../../css/u/umhyhdbuu.css';
import '../../css/o/oa5ub0xed.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="k5msskbck"/><path class="umhyhdbuu"/><path class="oa5ub0xed"/></g>`,
		"fallback": "withicons-bauhaus:git-compare",
	});
}

export default Component;
