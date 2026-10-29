import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/cw41ftbat.css';
import '../../css/d/d-9pp_qrb.css';
import '../../css/t/tmmgayb5u.css';
import '../../css/g/gz2kprb8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="cw41ftbat"/><path class="d-9pp_qrb wm-a"/><path class="tmmgayb5u wm-k"/><path class="gz2kprb8a wm-a"/></g>`,
		"fallback": "withicons:file-pdf-sketch",
	});
}

export default Component;
