import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/lstxdob-w.css';
import '../../css/y/yd0prmb1n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="lstxdob-w"/><path class="yd0prmb1n"/></g>`,
		"fallback": "streamline-sharp:earth-2",
	});
}

export default Component;
