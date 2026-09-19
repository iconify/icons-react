import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/s/sv2r7lb7q.css';
import '../../css/x/x-tgmbczx.css';
import '../../css/c/cxnfnyb1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="sv2r7lb7q"/><path class="x-tgmbczx"/><path class="cxnfnyb1m"/></g>`,
		"fallback": "hugeicons:building-06",
	});
}

export default Component;
