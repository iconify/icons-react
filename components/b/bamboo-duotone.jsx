import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mtg-soc5w.css';
import '../../css/y/yha_god-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mtg-soc5w secondary"/><path class="primary yha_god-e"/></g>`,
		"fallback": "iconaut:bamboo-duotone",
	});
}

export default Component;
