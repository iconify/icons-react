import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/lbj85ed8c.css';
import '../../css/z/zzhn1q2in.css';
import '../../css/g/g3kzkz79z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="lbj85ed8c wm-k"/><path class="wm-a zzhn1q2in"/><path class="g3kzkz79z wm-s"/></g>`,
		"fallback": "withicons:holi-splash-sketch",
	});
}

export default Component;
