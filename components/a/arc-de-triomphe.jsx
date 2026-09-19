import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/x/xdtb-bc_r.css';
import '../../css/k/kyp5fljps.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="xdtb-bc_r"/><path class="kyp5fljps"/></g>`,
		"fallback": "icon-park-outline:arc-de-triomphe",
	});
}

export default Component;
