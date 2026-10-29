import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/y/y_tz4vbcs.css';
import '../../css/q/qctmqxboa.css';
import '../../css/o/o0fh4gb6w.css';
import '../../css/n/n93_tdbcb.css';
import '../../css/j/jy9nt07gp.css';
import '../../css/f/fnes-bbeb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco y_tz4vbcs"/><path class="qctmqxboa wm-deco"/><path class="o0fh4gb6w wm-deco"/><path class="n93_tdbcb wm-k"/><path class="jy9nt07gp wm-a"/><path class="fnes-bbeb wm-k"/></g>`,
		"fallback": "withicons:dumpling-blueprint",
	});
}

export default Component;
