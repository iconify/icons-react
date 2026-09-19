import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bo2svgyay.css';
import '../../css/i/iec0-vkea.css';
import '../../css/o/ogtpc3b9n.css';
import '../../css/l/lb96csbkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bo2svgyay"/><path class="iec0-vkea"/><path class="ogtpc3b9n"/><path class="lb96csbkn"/></g>`,
		"fallback": "healthicons:close-policy-gaps-alt-24px",
	});
}

export default Component;
