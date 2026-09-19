import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/e/e9q9ydbxh.css';
import '../../css/v/v4qa-mbwl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="e9q9ydbxh"/><path class="v4qa-mbwl"/></g>`,
		"fallback": "hugeicons:court-law",
	});
}

export default Component;
