import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/bcbauvg5m.css';
import '../../css/e/e54-4tkbo.css';
import '../../css/v/vdbd48c3o.css';
import '../../css/f/f_4pebb1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="bcbauvg5m"/><path class="e54-4tkbo"/><path class="vdbd48c3o"/><path class="f_4pebb1c"/></g>`,
		"fallback": "hugeicons:diameter",
	});
}

export default Component;
