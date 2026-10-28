import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n5hcmwljm.css';
import '../../css/e/ehwh-9vbt.css';
import '../../css/z/zyag_hb8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n5hcmwljm"/><path class="ehwh-9vbt"/><path class="zyag_hb8b"/></g>`,
		"fallback": "andrsrxn:door-in",
	});
}

export default Component;
