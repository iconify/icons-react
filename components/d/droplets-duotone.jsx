import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jt760fb1s.css';
import '../../css/k/kt_zx1ufu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jt760fb1s secondary"/><path class="kt_zx1ufu primary"/></g>`,
		"fallback": "iconaut:droplets-duotone",
	});
}

export default Component;
