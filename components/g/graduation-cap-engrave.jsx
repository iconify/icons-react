import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/b4i-chjwh.css';
import '../../css/f/fttdwcc-b.css';
import '../../css/y/ybto86sfo.css';
import '../../css/t/ttlc-na8v.css';
import '../../css/p/po6tsm3ou.css';
import '../../css/l/l2miw0nqo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="b4i-chjwh wm-k"/><path class="fttdwcc-b wm-a"/><path class="wm-shadow ybto86sfo"/><path class="ttlc-na8v wm-k"/><path class="po6tsm3ou wm-k"/><path class="l2miw0nqo wm-a"/></g>`,
		"fallback": "withicons:graduation-cap-engrave",
	});
}

export default Component;
