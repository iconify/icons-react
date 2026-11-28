import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x7kpvabka.css';
import '../../css/r/r-8_wkqcg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary x7kpvabka"/><path class="primary r-8_wkqcg"/></g>`,
		"fallback": "iconaut:headphones-off-duotone",
	});
}

export default Component;
