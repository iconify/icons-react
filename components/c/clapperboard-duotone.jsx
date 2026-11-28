import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/ll6wueb3i.css';
import '../../css/d/dimz5rbne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ll6wueb3i secondary"/><path class="dimz5rbne primary"/></g>`,
		"fallback": "iconaut:clapperboard-duotone",
	});
}

export default Component;
