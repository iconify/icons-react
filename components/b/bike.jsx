import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/txpucdoay.css';
import '../../css/y/y1_g3-28w.css';
import '../../css/x/xbpkm4n8l.css';
import '../../css/w/wudeuccwr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="txpucdoay"/><path class="y1_g3-28w"/><path clip-rule="evenodd" class="xbpkm4n8l"/><path class="wudeuccwr"/></g>`,
		"fallback": "icon-park-outline:bike",
	});
}

export default Component;
