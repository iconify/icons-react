import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/z/zk1t69b_r.css';
import '../../css/w/wy_xx9b5e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="zk1t69b_r"/><path class="wy_xx9b5e"/></g>`,
		"fallback": "icon-park-solid:chafing-dish-one",
	});
}

export default Component;
