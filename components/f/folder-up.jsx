import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/ja19qbcmd.css';
import '../../css/w/waeqvwbax.css';
import '../../css/q/qujbgg6sl.css';
import '../../css/t/tlo-jjbpp.css';
import '../../css/r/rcaxmbcrr.css';
import '../../css/y/y5ecj5b3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ja19qbcmd wm-k"/><path class="waeqvwbax wm-k"/><path class="qujbgg6sl wm-k"/><path class="tlo-jjbpp wm-k"/><path class="rcaxmbcrr wm-shine"/><path class="wm-a y5ecj5b3t"/></g>`,
		"fallback": "withicons-anime:folder-up",
	});
}

export default Component;
