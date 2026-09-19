import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv9qcacyl.css';
import '../../css/a/aojj5bvzh.css';
import '../../css/d/d-d-usbel.css';
import '../../css/i/izt-8nbfn.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nv9qcacyl"><path class="aojj5bvzh"/><path class="d-d-usbel"/><path class="izt-8nbfn"/></g>`,
		"fallback": "flag:co-4x3",
	});
}

export default Component;
