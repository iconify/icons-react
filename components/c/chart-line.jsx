import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/w/wjhsscb2j.css';
import '../../css/t/tqv-5tryx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="wjhsscb2j"/><path class="tqv-5tryx"/></g>`,
		"fallback": "matita:chart-line",
	});
}

export default Component;
