import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/g7v18jbnh.css';
import '../../css/l/la-m18b9m.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/m/m57h02oos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="g7v18jbnh"/><path class="la-m18b9m wm-shadow"/><path class="yw4fz_b6b"/><path class="m57h02oos"/></g>`,
		"fallback": "withicons:football-engrave",
	});
}

export default Component;
