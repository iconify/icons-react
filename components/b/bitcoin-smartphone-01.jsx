import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bs2p8bb3r.css';
import '../../css/w/watrmtrxt.css';
import '../../css/t/td99tubxg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="bs2p8bb3r"/><path class="watrmtrxt"/><path class="td99tubxg"/></g>`,
		"fallback": "hugeicons:bitcoin-smartphone-01",
	});
}

export default Component;
