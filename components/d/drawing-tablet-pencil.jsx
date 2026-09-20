import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/q/qle758zgv.css';
import '../../css/l/lbimkfbsy.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="qle758zgv"/><path class="lbimkfbsy"/></g>`,
		"fallback": "marketeq:drawing-tablet-pencil",
	});
}

export default Component;
