import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/koiop_bgs.css';
import '../../css/t/t3pn7oyuv.css';
import '../../css/x/x7_2omoef.css';
import '../../css/m/mjecvc15l.css';
import '../../css/g/gfqmenbgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="koiop_bgs wm-k"/><path class="t3pn7oyuv wm-a"/><path class="wm-shadow x7_2omoef"/><path class="mjecvc15l wm-k"/><path class="gfqmenbgk wm-a"/></g>`,
		"fallback": "withicons:axe-engrave",
	});
}

export default Component;
