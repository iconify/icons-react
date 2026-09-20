import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ujmezac8f.css';
import '../../css/u/uc5h60_4s.css';
import '../../css/j/jbbepsbec.css';
import '../../css/j/jr-mhbc2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ujmezac8f"/><path class="uc5h60_4s"/><path class="jbbepsbec"/><path class="jr-mhbc2l"/></g>`,
		"fallback": "nrk:chromecast-solid-expressive",
	});
}

export default Component;
