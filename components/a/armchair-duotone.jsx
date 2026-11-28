import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kkrl-u0io.css';
import '../../css/q/qrf9-mqja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kkrl-u0io secondary"/><path class="primary qrf9-mqja"/></g>`,
		"fallback": "iconaut:armchair-duotone",
	});
}

export default Component;
