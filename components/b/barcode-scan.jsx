import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/y/y0zb6jd5q.css';
import '../../css/d/dp-wj4qmh.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="y0zb6jd5q"/><path class="dp-wj4qmh"/></g>`,
		"fallback": "marketeq:barcode-scan",
	});
}

export default Component;
