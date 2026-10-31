import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/um-8nqbwo.css';
import '../../css/n/n7z4b6otw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="um-8nqbwo"/><path class="n7z4b6otw"/></g>`,
		"fallback": "coolicons:cursor-click-bulk-round",
	});
}

export default Component;
