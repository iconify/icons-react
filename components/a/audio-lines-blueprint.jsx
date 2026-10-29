import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/g/gr9r66bcx.css';
import '../../css/a/ayhs6pbko.css';
import '../../css/c/cbppcqbmj.css';
import '../../css/y/ybp_pqrii.css';
import '../../css/l/lsgotya9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="gr9r66bcx wm-deco"/><path class="ayhs6pbko wm-deco"/><path class="cbppcqbmj wm-k"/><path class="wm-a ybp_pqrii"/><path class="lsgotya9q wm-k"/></g>`,
		"fallback": "withicons:audio-lines-blueprint",
	});
}

export default Component;
