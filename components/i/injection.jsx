import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/b/bmfv-3j8o.css';
import '../../css/r/rqgi9hb-j.css';
import '../../css/k/k_w130bpx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="bmfv-3j8o"/><path class="rqgi9hb-j"/><path class="k_w130bpx"/></g>`,
		"fallback": "hugeicons:injection",
	});
}

export default Component;
