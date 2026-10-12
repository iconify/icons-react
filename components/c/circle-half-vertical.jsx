import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n65s7jovo.css';
import '../../css/n/nkf5_lt8x.css';
import '../../css/u/uc6xgbcig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n65s7jovo"/><circle transform="rotate(90 12 12)" class="nkf5_lt8x"/><path class="uc6xgbcig"/></g>`,
		"fallback": "andrsrxn:circle-half-vertical",
	});
}

export default Component;
