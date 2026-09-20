import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lan61obya.css';
import '../../css/u/uvz2qw4cu.css';
import '../../css/e/e10t7tbcg.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/x/x60y9fu8b.css';
import '../../css/w/ws-p2j7av.css';
import '../../css/x/xkjmqzb3n.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lan61obya"/><path class="uvz2qw4cu"/><path class="e10t7tbcg"/><g class="ij2x_72vy"><path class="x60y9fu8b"/><path class="ws-p2j7av"/><path class="xkjmqzb3n"/></g>`,
		"fallback": "openmoji:cafeteria",
	});
}

export default Component;
