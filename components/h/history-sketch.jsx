import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jgpvlibmq.css';
import '../../css/v/v8-g08b2s.css';
import '../../css/e/e0s4or55u.css';
import '../../css/q/qrf0q7bxf.css';
import '../../css/h/hvx9fwbnt.css';
import '../../css/t/tkuq6fb9m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="jgpvlibmq wm-k"/><path class="v8-g08b2s wm-k"/><path class="e0s4or55u wm-k"/><path class="qrf0q7bxf wm-k"/><path class="hvx9fwbnt wm-a"/><path class="tkuq6fb9m wm-a"/></g>`,
		"fallback": "withicons:history-sketch",
	});
}

export default Component;
