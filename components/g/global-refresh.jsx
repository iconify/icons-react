import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/ffrak0b0s.css';
import '../../css/n/nqrwakdsg.css';
import '../../css/q/qg4l4xbso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ffrak0b0s"/><path class="nqrwakdsg"/><path class="qg4l4xbso"/></g>`,
		"fallback": "hugeicons:global-refresh",
	});
}

export default Component;
