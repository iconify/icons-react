import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/epnj5wb4n.css';
import '../../css/i/ix_3swbon.css';
import '../../css/c/cxw_bfcfr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="epnj5wb4n"/><path class="ix_3swbon"/><path class="cxw_bfcfr"/></g>`,
		"fallback": "hugeicons:bitcoin-presentation",
	});
}

export default Component;
