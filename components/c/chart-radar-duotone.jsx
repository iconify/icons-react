import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n4t-mmb5s.css';
import '../../css/v/v2j-9w9ke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n4t-mmb5s secondary"/><path class="primary v2j-9w9ke"/></g>`,
		"fallback": "iconaut:chart-radar-duotone",
	});
}

export default Component;
