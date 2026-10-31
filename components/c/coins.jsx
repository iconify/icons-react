import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/d/dc0gfbjei.css';
import '../../css/n/nntu6ub7p.css';
import '../../css/p/pkmigf6aa.css';
import '../../css/n/nfjuifbiw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="dc0gfbjei"/><path class="nntu6ub7p wm-shine"/><path class="pkmigf6aa wm-k"/><path class="nfjuifbiw wm-a"/></g>`,
		"fallback": "withicons-kawaii:coins",
	});
}

export default Component;
