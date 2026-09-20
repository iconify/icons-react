import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/w/wvwbcz5yh.css';
import '../../css/f/f5mww4bcb.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="wvwbcz5yh"/><path class="f5mww4bcb"/></g>`,
		"fallback": "marketeq:compact-disk-disable",
	});
}

export default Component;
