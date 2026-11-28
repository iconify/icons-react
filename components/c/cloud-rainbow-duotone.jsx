import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n26h20iag.css';
import '../../css/y/y6tlnpnjb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n26h20iag secondary"/><path class="primary y6tlnpnjb"/></g>`,
		"fallback": "iconaut:cloud-rainbow-duotone",
	});
}

export default Component;
