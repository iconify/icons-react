import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ouijlmb9q.css';
import '../../css/a/awzpprb4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ouijlmb9q secondary"/><path class="awzpprb4w primary"/></g>`,
		"fallback": "iconaut:eye-closed-duotone",
	});
}

export default Component;
