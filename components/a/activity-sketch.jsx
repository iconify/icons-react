import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/i62_4pb6q.css';
import '../../css/n/n-y_o-btm.css';
import '../../css/c/cfe6kwbgv.css';
import '../../css/y/yvr-gzb_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="i62_4pb6q wm-k"/><path class="n-y_o-btm wm-deco"/><path class="cfe6kwbgv wm-k"/><path class="wm-deco yvr-gzb_a"/></g>`,
		"fallback": "withicons:activity-sketch",
	});
}

export default Component;
