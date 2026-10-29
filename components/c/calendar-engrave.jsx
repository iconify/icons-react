import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/uvrhzfbsu.css';
import '../../css/j/jalfqco1n.css';
import '../../css/a/aari1qi6v.css';
import '../../css/j/jmvv3kbnk.css';
import '../../css/y/ykqnlnbbe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="uvrhzfbsu wm-k"/><path class="jalfqco1n wm-a"/><path class="aari1qi6v wm-shadow"/><path class="jmvv3kbnk wm-k"/><path class="wm-a ykqnlnbbe"/></g>`,
		"fallback": "withicons:calendar-engrave",
	});
}

export default Component;
