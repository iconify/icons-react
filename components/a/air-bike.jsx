import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/x/xr59g6zsq.css';
import '../../css/v/v4m-gobyd.css';
import '../../css/o/odvo2bwsa.css';
import '../../css/p/pywn4zp7t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="xr59g6zsq"/><circle class="v4m-gobyd"/><path class="odvo2bwsa"/><path class="pywn4zp7t"/></g>`,
		"fallback": "icon-park-outline:air-bike",
	});
}

export default Component;
