import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/c43w0yu2s.css';
import '../../css/h/hm9dey-ai.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/k/kvkz9eh_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="c43w0yu2s wm-k"/><path class="hm9dey-ai wm-shadow"/><path class="wm-k yw4fz_b6b"/><path class="kvkz9eh_m wm-a"/></g>`,
		"fallback": "withicons:circle-arrow-right-engrave",
	});
}

export default Component;
