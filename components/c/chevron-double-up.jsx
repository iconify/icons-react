import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mtw8bfdor.css';
import '../../css/p/pdg655a-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mtw8bfdor"/><path class="pdg655a-e"/></g>`,
		"fallback": "gg:chevron-double-up",
	});
}

export default Component;
