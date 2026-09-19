import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n2ymg89cn.css';
import '../../css/y/y1_g3-28w.css';
import '../../css/w/w_a3k2aej.css';
import '../../css/w/wudeuccwr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n2ymg89cn"/><path class="y1_g3-28w"/><path clip-rule="evenodd" class="w_a3k2aej"/><path class="wudeuccwr"/></g>`,
		"fallback": "icon-park-solid:bike",
	});
}

export default Component;
