import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/n/nmg33_t6b.css';
import '../../css/j/jr7i7-b9x.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="nmg33_t6b"/><path class="jr7i7-b9x"/></g>`,
		"fallback": "marketeq:baby-crib-2",
	});
}

export default Component;
