import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gw72_nbur.css';
import '../../css/n/n44j7ybzz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gw72_nbur secondary"/><path class="n44j7ybzz primary"/></g>`,
		"fallback": "iconaut:gate-or-duotone",
	});
}

export default Component;
