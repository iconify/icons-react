import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/u9-4l6bjs.css';
import '../../css/o/olh21jifq.css';
import '../../css/v/vp3_m3b5w.css';
import '../../css/z/z4bbp2bhq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="u9-4l6bjs wm-k"/><path class="olh21jifq wm-shadow"/><path class="vp3_m3b5w wm-k"/><path class="wm-a z4bbp2bhq"/></g>`,
		"fallback": "withicons:file-engrave",
	});
}

export default Component;
