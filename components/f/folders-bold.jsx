import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/ffjuf08zz.css';
import '../../css/n/n9vgyqbtc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ffjuf08zz"/><path class="n9vgyqbtc"/></g>`,
		"fallback": "solar:folders-bold",
	});
}

export default Component;
