import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/n/n3ax_-4po.css';
import '../../css/b/bgwri0b1n.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="n3ax_-4po"/><path class="bgwri0b1n"/></g>`,
		"fallback": "marketeq:contrass",
	});
}

export default Component;
