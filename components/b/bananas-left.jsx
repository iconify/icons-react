import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/k/k5gdasb0r.css';
import '../../css/b/bh6te1bsp.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="k5gdasb0r"/><path class="bh6te1bsp"/></g>`,
		"fallback": "marketeq:bananas-left",
	});
}

export default Component;
