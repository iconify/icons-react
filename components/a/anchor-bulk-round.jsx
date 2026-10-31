import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mz07yqb2e.css';
import '../../css/t/tzj6jjbaf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mz07yqb2e"/><path class="tzj6jjbaf"/></g>`,
		"fallback": "coolicons:anchor-bulk-round",
	});
}

export default Component;
