import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/f0drbx22f.css';
import '../../css/p/p4dwao03s.css';
import '../../css/y/y95393_dl.css';
import '../../css/i/i-7a-zb9i.css';
import '../../css/o/o53n0ib2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="f0drbx22f"/><path class="p4dwao03s wm-shadow"/><path class="y95393_dl"/><path class="i-7a-zb9i"/><path class="o53n0ib2h"/></g>`,
		"fallback": "withicons:database-engrave",
	});
}

export default Component;
