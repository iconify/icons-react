import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ni5yzcc4r.css';
import '../../css/b/btgzemsrk.css';
import '../../css/s/so1hlw5no.css';
import '../../css/m/mi17ykb8a.css';
import '../../css/r/ru87loj5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ni5yzcc4r"/><rect transform="rotate(-45 32.75 1.17)scale(1 -1)" class="btgzemsrk"/><path class="so1hlw5no"/><path class="mi17ykb8a"/><path class="ru87loj5k"/></g>`,
		"fallback": "andrsrxn:eraser-sparkle",
	});
}

export default Component;
