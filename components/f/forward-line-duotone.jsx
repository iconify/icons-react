import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/ud73q6bne.css';
import '../../css/n/nb1_txbrg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ud73q6bne"/><path class="nb1_txbrg"/></g>`,
		"fallback": "solar:forward-line-duotone",
	});
}

export default Component;
