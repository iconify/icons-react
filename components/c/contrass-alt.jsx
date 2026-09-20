import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/t/t3y5_wb8i.css';
import '../../css/w/wvwbcz5yh.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="t3y5_wb8i"/><path class="wvwbcz5yh"/></g>`,
		"fallback": "marketeq:contrass-alt",
	});
}

export default Component;
