import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p-ri8qbcz.css';
import '../../css/q/q8ro_-bdt.css';
import '../../css/k/kq9vl0iby.css';
import '../../css/y/y72_wk6ok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="p-ri8qbcz"/><path class="q8ro_-bdt"/><path class="kq9vl0iby"/><path class="y72_wk6ok"/></g>`,
		"fallback": "andrsrxn:house-device-laptop",
	});
}

export default Component;
