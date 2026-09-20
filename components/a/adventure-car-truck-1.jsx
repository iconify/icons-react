import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/f7_kfcbwf.css';
import '../../css/t/tp66aodkz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="f7_kfcbwf"/><path class="tp66aodkz"/></g>`,
		"fallback": "streamline-ultimate:adventure-car-truck-1",
	});
}

export default Component;
