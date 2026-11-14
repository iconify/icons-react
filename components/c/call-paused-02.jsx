import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/d/dpgw88icc.css';
import '../../css/z/zavnerbsv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="dpgw88icc"/><path class="zavnerbsv"/></g>`,
		"fallback": "hugeicons:call-paused-02",
	});
}

export default Component;
