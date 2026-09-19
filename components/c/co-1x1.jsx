import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv9qcacyl.css';
import '../../css/t/tbflkfbsb.css';
import '../../css/n/nt0stcbzz.css';
import '../../css/e/e_6nr1b5q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nv9qcacyl"><path class="tbflkfbsb"/><path class="nt0stcbzz"/><path class="e_6nr1b5q"/></g>`,
		"fallback": "flag:co-1x1",
	});
}

export default Component;
