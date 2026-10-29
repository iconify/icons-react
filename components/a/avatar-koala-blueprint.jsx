import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/e/ehc23t72p.css';
import '../../css/f/fsk0ki2ik.css';
import '../../css/y/yi1bneumz.css';
import '../../css/f/fxkd8kbag.css';
import '../../css/j/jqfn8_bps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="ehc23t72p wm-deco"/><path class="fsk0ki2ik wm-deco"/><path class="wm-deco yi1bneumz"/><path class="fxkd8kbag wm-k"/><path class="jqfn8_bps wm-a"/></g>`,
		"fallback": "withicons:avatar-koala-blueprint",
	});
}

export default Component;
