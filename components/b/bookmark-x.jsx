import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wgxozyb-b.css';
import '../../css/g/g4di-hz_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wgxozyb-b"/><path class="g4di-hz_f"/></g>`,
		"fallback": "andrsrxn:bookmark-x",
	});
}

export default Component;
