import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/z/zvq_xrb7o.css';
import '../../css/u/u5o1hzk1p.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="zvq_xrb7o"/><path class="u5o1hzk1p"/></g>`,
		"fallback": "marketeq:desk-lamp-round",
	});
}

export default Component;
