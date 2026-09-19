import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d6k32obsd.css';
import '../../css/a/ai6bbdefy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d6k32obsd"/><path clip-rule="evenodd" class="ai6bbdefy"/></g>`,
		"fallback": "healthicons:contraceptive-voucher-outline-24px",
	});
}

export default Component;
