import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/m72b7wb7y.css';
import '../../css/e/e15xp0bpo.css';
import '../../css/g/g8_wfebcw.css';
import '../../css/v/vplo5e_jn.css';
import '../../css/b/b29_gwzlq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="m72b7wb7y wm-k"/><path class="e15xp0bpo wm-a"/><path class="g8_wfebcw wm-shadow"/><path class="vplo5e_jn wm-k"/><path class="b29_gwzlq wm-a"/></g>`,
		"fallback": "withicons:christmas-tree-engrave",
	});
}

export default Component;
