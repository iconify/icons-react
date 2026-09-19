import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/v-o7l4fmy.css';
import '../../css/z/zlk-9ccnf.css';
import '../../css/y/yibe7abyl.css';
import '../../css/r/rr42l0b9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="v-o7l4fmy"/><path class="zlk-9ccnf"/><path class="yibe7abyl"/><path class="rr42l0b9y"/></g>`,
		"fallback": "hugeicons:bubble-tea-01",
	});
}

export default Component;
