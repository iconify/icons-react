import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aqg4-l9yl.css';
import '../../css/y/y_yd84bnq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="aqg4-l9yl"/><path class="y_yd84bnq"/></g>`,
		"fallback": "tdesign:caret-right",
	});
}

export default Component;
