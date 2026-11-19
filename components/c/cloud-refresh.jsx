import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/ll76q4btx.css';
import '../../css/w/wgakjzb4j.css';
import '../../css/c/ctfxobcnx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ll76q4btx"/><path class="wgakjzb4j"/><path class="ctfxobcnx"/></g>`,
		"fallback": "andrsrxn:cloud-refresh",
	});
}

export default Component;
