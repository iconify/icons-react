import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/t/t1r_g8bwx.css';
import '../../css/h/h6_1hfvax.css';
import '../../css/y/yestyib-n.css';
import '../../css/f/frqebvb6u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="t1r_g8bwx"/><path class="h6_1hfvax wm-k"/><path class="wm-a yestyib-n"/><path class="frqebvb6u wm-deco"/></g>`,
		"fallback": "withicons-kawaii:cupid-bow",
	});
}

export default Component;
