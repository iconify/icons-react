import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bue_g-b7r.css';
import '../../css/t/tsenyx-qb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bue_g-b7r"/><path clip-rule="evenodd" class="tsenyx-qb"/></g>`,
		"fallback": "gravity-ui:circle-number-8-fill",
	});
}

export default Component;
