import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/t29q7uivw.css';
import '../../css/o/olh21jifq.css';
import '../../css/v/vp3_m3b5w.css';
import '../../css/g/gdnkakbki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="t29q7uivw wm-k"/><path class="olh21jifq wm-shadow"/><path class="vp3_m3b5w wm-k"/><path class="gdnkakbki wm-a"/></g>`,
		"fallback": "withicons:file-archive-engrave",
	});
}

export default Component;
