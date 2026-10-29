import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/ryjrr4bdl.css';
import '../../css/x/xmc7npbjc.css';
import '../../css/w/wltcj9ymb.css';
import '../../css/b/b7h7t_bqn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ryjrr4bdl"/><path class="wm-a xmc7npbjc"/><path class="wltcj9ymb wm-k"/><path class="b7h7t_bqn wm-a"/></g>`,
		"fallback": "withicons:file-up-sketch",
	});
}

export default Component;
