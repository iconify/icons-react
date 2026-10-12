import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yzfjmnikp.css';
import '../../css/v/v54vc0bdn.css';
import '../../css/u/ua_243ozi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="yzfjmnikp"/><path class="v54vc0bdn"/><path class="ua_243ozi"/></g>`,
		"fallback": "andrsrxn:gem-star",
	});
}

export default Component;
