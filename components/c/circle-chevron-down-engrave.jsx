import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/nug8o3bwi.css';
import '../../css/h/hm9dey-ai.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/v/v9bwpl0eo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="nug8o3bwi wm-k"/><path class="hm9dey-ai wm-shadow"/><path class="wm-k yw4fz_b6b"/><path class="v9bwpl0eo wm-a"/></g>`,
		"fallback": "withicons:circle-chevron-down-engrave",
	});
}

export default Component;
