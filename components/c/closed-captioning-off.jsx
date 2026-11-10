import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lbei61bae.css';
import '../../css/v/vai7imbuj.css';
import '../../css/s/s43s198-h.css';
import '../../css/v/vhxf3hhbi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lbei61bae"/><path class="vai7imbuj"/><path class="s43s198-h"/><path class="vhxf3hhbi"/></g>`,
		"fallback": "andrsrxn:closed-captioning-off",
	});
}

export default Component;
