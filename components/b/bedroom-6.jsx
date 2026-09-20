import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/t/tes9yubqv.css';
import '../../css/a/a-ws-u8cq.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="tes9yubqv"/><path class="a-ws-u8cq"/></g>`,
		"fallback": "marketeq:bedroom-6",
	});
}

export default Component;
