import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/ryy5dkt3h.css';
import '../../css/r/r9qeinbko.css';
import '../../css/j/j5e0pebko.css';
import '../../css/v/vt4fvacch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ryy5dkt3h"/><path class="r9qeinbko wm-a"/><path class="j5e0pebko wm-k"/><path class="vt4fvacch wm-a"/></g>`,
		"fallback": "withicons:badge-x-sketch",
	});
}

export default Component;
