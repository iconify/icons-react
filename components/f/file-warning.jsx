import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jv2y62b4z.css';
import '../../css/p/p6wpkwb1d.css';
import '../../css/h/hqzbl-b2s.css';
import '../../css/l/lpka66bfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jv2y62b4z"/><path class="p6wpkwb1d"/><path class="hqzbl-b2s"/><path class="lpka66bfm"/></g>`,
		"fallback": "andrsrxn:file-warning",
	});
}

export default Component;
