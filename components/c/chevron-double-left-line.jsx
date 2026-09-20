import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ojv6s3hmf.css';
import '../../css/q/q4k_asbje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ojv6s3hmf"/><path class="q4k_asbje"/></g>`,
		"fallback": "majesticons:chevron-double-left-line",
	});
}

export default Component;
