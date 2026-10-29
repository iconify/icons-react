import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/q9gd0cbpo.css';
import '../../css/g/gwmckxxys.css';
import '../../css/o/olh21jifq.css';
import '../../css/v/vp3_m3b5w.css';
import '../../css/l/ladxagbdy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="q9gd0cbpo wm-k"/><path class="gwmckxxys wm-a"/><path class="olh21jifq wm-shadow"/><path class="vp3_m3b5w wm-k"/><path class="ladxagbdy wm-a"/></g>`,
		"fallback": "withicons:file-code-engrave",
	});
}

export default Component;
