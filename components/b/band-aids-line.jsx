import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l2cvx7bcp.css';
import '../../css/u/ug7ux5rvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect transform="rotate(-45 2 8.364)" class="l2cvx7bcp"/><path class="ug7ux5rvx"/></g>`,
		"fallback": "majesticons:band-aids-line",
	});
}

export default Component;
