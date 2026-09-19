import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv9qcacyl.css';
import '../../css/m/mjdv0zb8x.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/n/n-qrszsjk.css';
import '../../css/k/k76lkxb4x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nv9qcacyl"><path class="mjdv0zb8x"/><g class="n1mjunbsu"><path class="n-qrszsjk"/><path class="k76lkxb4x"/></g></g>`,
		"fallback": "flag:ch-1x1",
	});
}

export default Component;
