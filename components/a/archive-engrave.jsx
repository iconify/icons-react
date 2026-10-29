import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/iaoyh7gpi.css';
import '../../css/q/q511u5m8e.css';
import '../../css/k/k_lneb11t.css';
import '../../css/o/oy6a688zn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="iaoyh7gpi wm-k"/><path class="q511u5m8e wm-shadow"/><path class="k_lneb11t wm-k"/><path class="oy6a688zn wm-a"/></g>`,
		"fallback": "withicons:archive-engrave",
	});
}

export default Component;
