import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/d/dpgw88icc.css';
import '../../css/u/uxyxgac4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="dpgw88icc"/><path class="uxyxgac4h"/></g>`,
		"fallback": "hugeicons:call-add-02",
	});
}

export default Component;
