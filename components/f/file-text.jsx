import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a65maebed.css';
import '../../css/t/t1_nw6bph.css';
import '../../css/n/nwvhst9jt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a65maebed"/><path class="t1_nw6bph"/><path class="nwvhst9jt"/></g>`,
		"fallback": "andrsrxn:file-text",
	});
}

export default Component;
