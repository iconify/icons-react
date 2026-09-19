import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/l/lbnlx0bxj.css';
import '../../css/a/ai46_xhvw.css';
import '../../css/w/wvthsnzpt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="lbnlx0bxj"/><path class="ai46_xhvw"/><path class="wvthsnzpt"/></g>`,
		"fallback": "hugeicons:ai-chemistry-01",
	});
}

export default Component;
