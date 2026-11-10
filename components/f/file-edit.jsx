import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w4ndr1_4b.css';
import '../../css/s/se0214bji.css';
import '../../css/a/acy_macas.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w4ndr1_4b"/><path class="se0214bji"/><path class="acy_macas"/></g>`,
		"fallback": "andrsrxn:file-edit",
	});
}

export default Component;
