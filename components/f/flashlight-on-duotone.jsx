import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cgp52u_px.css';
import '../../css/f/foyapdb-p.css';
import '../../css/k/kvkb1-boj.css';
import '../../css/k/kigi6xf5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cgp52u_px"/><path clip-rule="evenodd" class="foyapdb-p"/><path class="kvkb1-boj"/><path class="kigi6xf5f"/></g>`,
		"fallback": "reicon:flashlight-on-duotone",
	});
}

export default Component;
