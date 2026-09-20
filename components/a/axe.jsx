import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/w/wzo2vbcvr.css';
import '../../css/f/f51jx7r6r.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="wzo2vbcvr"/><path class="f51jx7r6r"/></g>`,
		"fallback": "marketeq:axe",
	});
}

export default Component;
