import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hptvn1b7p.css';
import '../../css/b/bv86tac1n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="hptvn1b7p"/><path class="bv86tac1n"/></g>`,
		"fallback": "healthicons:hiv-pos",
	});
}

export default Component;
