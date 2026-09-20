import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/c/cby_gskag.css';
import '../../css/w/wvwbcz5yh.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="cby_gskag"/><path class="wvwbcz5yh"/></g>`,
		"fallback": "marketeq:double-left-sign-circle",
	});
}

export default Component;
