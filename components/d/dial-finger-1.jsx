import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jsbks5b4c.css';
import '../../css/a/ay-txgbak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="jsbks5b4c"/><path class="ay-txgbak"/></g>`,
		"fallback": "streamline-ultimate:dial-finger-1",
	});
}

export default Component;
