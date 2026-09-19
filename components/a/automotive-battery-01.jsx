import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/owncrzbvw.css';
import '../../css/v/vbn_0g4sz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="owncrzbvw"/><path class="vbn_0g4sz"/></g>`,
		"fallback": "hugeicons:automotive-battery-01",
	});
}

export default Component;
