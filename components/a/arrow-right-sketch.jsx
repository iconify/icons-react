import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/d8w4ckr4q.css';
import '../../css/a/a8xvl7b2z.css';
import '../../css/e/eqg5iy27b.css';
import '../../css/z/ze-r5kfbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="d8w4ckr4q wm-k"/><path class="a8xvl7b2z wm-a"/><path class="eqg5iy27b wm-k"/><path class="wm-a ze-r5kfbs"/></g>`,
		"fallback": "withicons:arrow-right-sketch",
	});
}

export default Component;
