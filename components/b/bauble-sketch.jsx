import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/owpzfgb8d.css';
import '../../css/d/dsshy_bnq.css';
import '../../css/z/z0pihbb7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="owpzfgb8d wm-a"/><path class="dsshy_bnq wm-k"/><path class="wm-a z0pihbb7g"/></g>`,
		"fallback": "withicons:bauble-sketch",
	});
}

export default Component;
