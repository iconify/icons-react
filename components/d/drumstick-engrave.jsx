import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/odcznobbg.css';
import '../../css/q/qllxnxb-j.css';
import '../../css/a/arkab0lto.css';
import '../../css/k/k3mij9nwy.css';
import '../../css/k/kjl88pbfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="odcznobbg wm-k"/><path class="qllxnxb-j wm-a"/><path class="arkab0lto wm-shadow"/><path class="k3mij9nwy wm-k"/><path class="kjl88pbfm wm-a"/></g>`,
		"fallback": "withicons:drumstick-engrave",
	});
}

export default Component;
