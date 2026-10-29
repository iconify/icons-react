import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/z5tp3-dsg.css';
import '../../css/m/m4qzajbec.css';
import '../../css/t/t1uuefuzf.css';
import '../../css/b/bb7znibim.css';
import '../../css/b/b1z0d6brh.css';
import '../../css/i/ieced1b-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k z5tp3-dsg"/><path class="m4qzajbec wm-a"/><path class="t1uuefuzf wm-shadow"/><path class="bb7znibim wm-k"/><path class="b1z0d6brh wm-k"/><path class="ieced1b-r wm-a"/></g>`,
		"fallback": "withicons:diya-engrave",
	});
}

export default Component;
