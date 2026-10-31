import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/b/bii44ybvr.css';
import '../../css/c/cngzmacmv.css';
import '../../css/i/i-e0xfb7g.css';
import '../../css/l/l0eprvn5b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="bii44ybvr"/><path class="cngzmacmv wm-shine"/><path class="i-e0xfb7g wm-k"/><path class="l0eprvn5b wm-a"/></g>`,
		"fallback": "withicons-kawaii:hand-coins",
	});
}

export default Component;
