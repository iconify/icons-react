import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/i/ixx_sebyw.css';
import '../../css/r/rbzq4bjzv.css';
import '../../css/f/f8h9mitoo.css';
import '../../css/n/nh5rovrci.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="ixx_sebyw wm-deco"/><path class="rbzq4bjzv wm-deco"/><path class="f8h9mitoo wm-k"/><path class="nh5rovrci wm-a"/></g>`,
		"fallback": "withicons:calculator-blueprint",
	});
}

export default Component;
