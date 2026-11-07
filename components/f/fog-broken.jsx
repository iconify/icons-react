import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/n58ssxigb.css';
import '../../css/l/lt7j86jjt.css';
import '../../css/t/tw2p-vbaq.css';
import '../../css/l/l6md27rub.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="n58ssxigb"/><path class="lt7j86jjt"/><path class="tw2p-vbaq"/><path class="l6md27rub"/></g>`,
		"fallback": "solar:fog-broken",
	});
}

export default Component;
