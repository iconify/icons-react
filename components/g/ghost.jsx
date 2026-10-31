import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ez2qg018n.css';
import '../../css/t/tini75yzs.css';
import '../../css/r/rjp1pwblv.css';
import '../../css/w/w7i445h-d.css';
import '../../css/f/fs7fshb9n.css';
import '../../css/z/zh9fr9zpg.css';
import '../../css/v/vq74mabpo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ez2qg018n wm-k"/><path class="tini75yzs wm-deco"/><path class="rjp1pwblv wm-k"/><path class="w7i445h-d wm-k"/><path class="fs7fshb9n wm-shadow"/><path class="wm-shine zh9fr9zpg"/><path class="vq74mabpo wm-shine"/></g>`,
		"fallback": "withicons-valentine:ghost",
	});
}

export default Component;
