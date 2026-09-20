import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c9gfq_byx.css';
import '../../css/v/vkrjpc-9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="c9gfq_byx"/><path class="vkrjpc-9s"/></g>`,
		"fallback": "tabler:arrow-left-right",
	});
}

export default Component;
