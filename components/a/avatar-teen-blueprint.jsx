import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/k/k_6m3abxs.css';
import '../../css/f/fgaqfsbrg.css';
import '../../css/r/rbzq4bjzv.css';
import '../../css/k/kck32w7qe.css';
import '../../css/w/w-zcig2pk.css';
import '../../css/h/hnd3xubgk.css';
import '../../css/v/vildi5bvg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="k_6m3abxs wm-deco"/><path class="fgaqfsbrg wm-deco"/><path class="rbzq4bjzv wm-deco"/><path class="kck32w7qe wm-k"/><path class="w-zcig2pk wm-k"/><path class="hnd3xubgk wm-a"/><path class="vildi5bvg wm-a"/></g>`,
		"fallback": "withicons:avatar-teen-blueprint",
	});
}

export default Component;
