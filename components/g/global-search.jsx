import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/ed3_dlb7r.css';
import '../../css/q/qg4l4xbso.css';
import '../../css/a/a6moqwkki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ed3_dlb7r"/><path class="qg4l4xbso"/><path class="a6moqwkki"/></g>`,
		"fallback": "hugeicons:global-search",
	});
}

export default Component;
