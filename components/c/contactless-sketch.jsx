import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/ekqmbnb8e.css';
import '../../css/c/ck8dhpbcc.css';
import '../../css/h/hje6bbbsd.css';
import '../../css/a/acoval0gz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ekqmbnb8e wm-k"/><path class="ck8dhpbcc wm-a"/><path class="hje6bbbsd wm-k"/><path class="acoval0gz wm-a"/></g>`,
		"fallback": "withicons:contactless-sketch",
	});
}

export default Component;
