import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xqk982fuf.css';
import '../../css/d/dq5w_efsc.css';
import '../../css/x/xaevt7b6g.css';
import '../../css/e/e11_0-b5v.css';
import '../../css/e/e-wc6ob9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wm-k xqk982fuf"/><path class="dq5w_efsc wm-k"/><path class="wm-k xaevt7b6g"/><path class="e11_0-b5v wm-k"/><path class="e-wc6ob9i wm-shine"/></g>`,
		"fallback": "withicons-anime:arrow-big-up",
	});
}

export default Component;
