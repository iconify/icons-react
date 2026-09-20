import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f3qbsmdlb.css';
import '../../css/r/ropganp6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="f3qbsmdlb"/><path class="ropganp6g"/></g>`,
		"fallback": "tabler:basket-cog",
	});
}

export default Component;
