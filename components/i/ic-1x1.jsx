import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv9qcacyl.css';
import '../../css/n/ncw4z3bwh.css';
import '../../css/w/wps4e9ynm.css';
import '../../css/f/fz7419b1g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nv9qcacyl"><path class="ncw4z3bwh"/><path class="wps4e9ynm"/><path class="fz7419b1g"/></g>`,
		"fallback": "flag:ic-1x1",
	});
}

export default Component;
