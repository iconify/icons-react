import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wo_awpt7h.css';
import '../../css/w/wyjl3bbib.css';
import '../../css/h/hkzmygcvp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wo_awpt7h"/><path class="wyjl3bbib"/><path class="hkzmygcvp"/></g>`,
		"fallback": "solar:floor-lamp-minimalistic-bold",
	});
}

export default Component;
