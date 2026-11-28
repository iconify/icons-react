import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s50uj1bdm.css';
import '../../css/y/yivs3vvit.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s50uj1bdm secondary"/><path class="primary yivs3vvit"/></g>`,
		"fallback": "iconaut:bus-front-duotone",
	});
}

export default Component;
