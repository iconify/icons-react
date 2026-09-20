import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/x/xpgm2pf7g.css';
import '../../css/c/czmlpkbyw.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="xpgm2pf7g"/><path class="czmlpkbyw"/></g>`,
		"fallback": "marketeq:coupon",
	});
}

export default Component;
