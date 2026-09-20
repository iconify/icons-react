import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/oscz7vz_x.css';
import '../../css/p/pxghbcvbf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="oscz7vz_x"/><path class="pxghbcvbf"/></g>`,
		"fallback": "streamline-ultimate:business-big-small-fish",
	});
}

export default Component;
