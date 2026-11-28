import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tfgi60d7u.css';
import '../../css/s/s81yrjb-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary tfgi60d7u"/><path class="primary s81yrjb-q"/></g>`,
		"fallback": "iconaut:grapevine-duotone",
	});
}

export default Component;
