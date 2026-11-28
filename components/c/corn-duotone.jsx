import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s1up28qaf.css';
import '../../css/w/wxng81b2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s1up28qaf secondary"/><path class="primary wxng81b2l"/></g>`,
		"fallback": "iconaut:corn-duotone",
	});
}

export default Component;
