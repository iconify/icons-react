import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/h/h0wousbwd.css';
import '../../css/h/hihhk-b3v.css';
import '../../css/l/lr9f57apr.css';
import '../../css/p/p5ykwhtgk.css';
import '../../css/l/l-k_nibkr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="h0wousbwd"/><path class="hihhk-b3v"/><path class="lr9f57apr"/><path class="p5ykwhtgk"/><path class="l-k_nibkr"/></g>`,
		"fallback": "icon-park-outline:dribble",
	});
}

export default Component;
