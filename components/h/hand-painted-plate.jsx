import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/coazjbb-c.css';
import '../../css/i/ikt0omuzx.css';
import '../../css/q/qclquzb_v.css';
import '../../css/g/g6mgfwbjh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="coazjbb-c"/><path class="ikt0omuzx"/><rect class="qclquzb_v"/><rect class="g6mgfwbjh"/></g>`,
		"fallback": "icon-park-outline:hand-painted-plate",
	});
}

export default Component;
