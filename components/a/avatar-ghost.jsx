import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/b/bfuswsbfk.css';
import '../../css/b/bvw8w4fva.css';
import '../../css/n/nm-qj_bex.css';
import '../../css/k/k05fspbzc.css';
import '../../css/w/w49ngccqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="bfuswsbfk"/><path class="bvw8w4fva wm-shine"/><path class="nm-qj_bex wm-k"/><path class="k05fspbzc wm-a"/><path class="w49ngccqq wm-deco"/></g>`,
		"fallback": "withicons-kawaii:avatar-ghost",
	});
}

export default Component;
