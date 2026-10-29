import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/krl86btlo.css';
import '../../css/l/lbhtagbyq.css';
import '../../css/u/uewg3bcmw.css';
import '../../css/m/mmh2-406e.css';
import '../../css/u/u4plrgndh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="krl86btlo"/><path class="lbhtagbyq wm-k"/><path class="uewg3bcmw wm-a"/><path class="mmh2-406e wm-k"/><path class="u4plrgndh wm-a"/></g>`,
		"fallback": "withicons:droplets-sketch",
	});
}

export default Component;
