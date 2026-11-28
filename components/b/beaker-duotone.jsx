import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ioy2ptb-o.css';
import '../../css/w/wxd-6_u6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ioy2ptb-o secondary"/><path class="primary wxd-6_u6o"/></g>`,
		"fallback": "iconaut:beaker-duotone",
	});
}

export default Component;
