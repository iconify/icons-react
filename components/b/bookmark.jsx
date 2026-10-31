import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c60_6ou-y.css';
import '../../css/g/g9sz0zbdb.css';
import '../../css/b/bfbvrsrbg.css';
import '../../css/r/rv51f1b8i.css';
import '../../css/x/x892n8buu.css';
import '../../css/q/q_565tcgm.css';
import '../../css/w/wjhtpubmj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c60_6ou-y wm-k"/><path class="g9sz0zbdb wm-deco"/><path class="bfbvrsrbg wm-k"/><path class="rv51f1b8i wm-shadow"/><path class="wm-shine x892n8buu"/><path class="q_565tcgm wm-shine"/><path class="wjhtpubmj wm-shine"/></g>`,
		"fallback": "withicons-valentine:bookmark",
	});
}

export default Component;
