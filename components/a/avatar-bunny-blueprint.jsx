import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/f/fl-_d0bxx.css';
import '../../css/s/s0bn3tbfk.css';
import '../../css/j/jlfuetb9g.css';
import '../../css/y/y2dh5ifmd.css';
import '../../css/k/kevts6bge.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="fl-_d0bxx wm-deco"/><path class="s0bn3tbfk wm-deco"/><path class="jlfuetb9g wm-deco"/><path class="wm-k y2dh5ifmd"/><path class="kevts6bge wm-a"/></g>`,
		"fallback": "withicons:avatar-bunny-blueprint",
	});
}

export default Component;
