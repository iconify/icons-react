import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vjrwgl8jj.css';
import '../../css/a/a-gkpk2uy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="vjrwgl8jj"/><path class="a-gkpk2uy"/></g>`,
		"fallback": "healthicons:hiv-pos-outline",
	});
}

export default Component;
