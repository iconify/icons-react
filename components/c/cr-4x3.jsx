import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv9qcacyl.css';
import '../../css/k/knbkhybae.css';
import '../../css/p/pxs4cphfa.css';
import '../../css/j/jj_owxbri.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nv9qcacyl"><path class="knbkhybae"/><path class="pxs4cphfa"/><path class="jj_owxbri"/></g>`,
		"fallback": "flag:cr-4x3",
	});
}

export default Component;
