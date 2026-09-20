import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/v/vj567d7up.css';
import '../../css/m/mcojq7b_o.css';
import '../../css/z/z7h9dmbpz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="vj567d7up"/><path class="mcojq7b_o"/><rect class="z7h9dmbpz"/></g>`,
		"fallback": "mage:bell-notification-square",
	});
}

export default Component;
