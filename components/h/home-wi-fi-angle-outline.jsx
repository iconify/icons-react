import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mopsj6imq.css';
import '../../css/j/jr8l-bcpw.css';
import '../../css/h/hl0_aw4ei.css';
import '../../css/w/wru8zmbec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mopsj6imq"/><path class="jr8l-bcpw"/><path class="hl0_aw4ei"/><path clip-rule="evenodd" class="wru8zmbec"/>`,
		"fallback": "solar:home-wi-fi-angle-outline",
	});
}

export default Component;
