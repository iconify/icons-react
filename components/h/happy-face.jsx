import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/xm9b4_4pg.css';
import '../../css/v/vl5g0ab8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="xm9b4_4pg"/><path class="vl5g0ab8c"/></g>`,
		"fallback": "streamline-sharp:happy-face",
	});
}

export default Component;
