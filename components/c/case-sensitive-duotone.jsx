import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/irnojjdia.css';
import '../../css/w/w90uilejn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="irnojjdia secondary"/><path class="primary w90uilejn"/></g>`,
		"fallback": "iconaut:case-sensitive-duotone",
	});
}

export default Component;
