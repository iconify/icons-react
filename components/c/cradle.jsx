import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/s/sq6q_uh4x.css';
import '../../css/o/oarw0eb9c.css';
import '../../css/e/ebldlibvt.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="sq6q_uh4x"/><path class="oarw0eb9c"/><path class="ebldlibvt"/></g>`,
		"fallback": "marketeq:cradle",
	});
}

export default Component;
