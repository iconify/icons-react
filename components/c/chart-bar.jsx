import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/j/j2fzmum1m.css';
import '../../css/d/d2dtmimrd.css';
import '../../css/w/wfqhd5bow.css';
import '../../css/k/k2_fi1v0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="j2fzmum1m"/><path class="d2dtmimrd"/><path class="wfqhd5bow"/><path class="k2_fi1v0q"/></g>`,
		"fallback": "matita:chart-bar",
	});
}

export default Component;
