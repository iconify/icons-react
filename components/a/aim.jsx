import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/b/bgv6rubbg.css';
import '../../css/p/ptnmc6cip.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="bgv6rubbg"/><path class="ptnmc6cip"/></g>`,
		"fallback": "marketeq:aim",
	});
}

export default Component;
