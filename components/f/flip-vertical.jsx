import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xjiy9w2-u.css';
import '../../css/r/rfm_3bbsv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xjiy9w2-u"/><path class="rfm_3bbsv"/></g>`,
		"fallback": "andrsrxn:flip-vertical",
	});
}

export default Component;
