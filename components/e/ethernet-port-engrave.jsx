import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/kwp6q9bxu.css';
import '../../css/f/fotuh8qtd.css';
import '../../css/h/hm38-ccpa.css';
import '../../css/f/f3tg6ebbt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="kwp6q9bxu wm-k"/><path class="fotuh8qtd wm-shadow"/><path class="hm38-ccpa wm-k"/><path class="f3tg6ebbt wm-a"/></g>`,
		"fallback": "withicons:ethernet-port-engrave",
	});
}

export default Component;
