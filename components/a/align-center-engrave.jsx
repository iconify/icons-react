import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xouepfbxt.css';
import '../../css/o/o75np-b8h.css';
import '../../css/p/p1-mhho-m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="xouepfbxt"/><path class="o75np-b8h wm-shadow"/><path class="p1-mhho-m"/></g>`,
		"fallback": "withicons:align-center-engrave",
	});
}

export default Component;
