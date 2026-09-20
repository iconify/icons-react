import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/ldgzx1bkp.css';
import '../../css/c/cakpsdbip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ldgzx1bkp"/><path class="cakpsdbip"/></g>`,
		"fallback": "keyline-icons:droplets-sharp-duotone",
	});
}

export default Component;
