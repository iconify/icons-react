import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jttxyypzl.css';
import '../../css/n/nudx0rblb.css';
import '../../css/u/uiwht6b4a.css';
import '../../css/g/ghn405o5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="jttxyypzl wm-k"/><path class="nudx0rblb wm-a"/><path class="uiwht6b4a wm-k"/><path class="ghn405o5o wm-a"/></g>`,
		"fallback": "withicons:avatar-baby-sketch",
	});
}

export default Component;
