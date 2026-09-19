import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv9qcacyl.css';
import '../../css/e/erzf03bmv.css';
import '../../css/w/w0rvml_7c.css';
import '../../css/s/sqhuey_dp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nv9qcacyl"><path class="erzf03bmv"/><path class="w0rvml_7c"/><path class="sqhuey_dp"/></g>`,
		"fallback": "flag:ie-1x1",
	});
}

export default Component;
