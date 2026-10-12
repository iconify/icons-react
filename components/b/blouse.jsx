import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bwz9ihbqq.css';
import '../../css/s/ssucg_aae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bwz9ihbqq"/><path class="ssucg_aae"/></g>`,
		"fallback": "andrsrxn:blouse",
	});
}

export default Component;
