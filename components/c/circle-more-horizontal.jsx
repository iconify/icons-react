import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tx_ah59as.css';
import '../../css/e/er1p0-brb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tx_ah59as"/><path class="er1p0-brb"/></g>`,
		"fallback": "keyline-icons:circle-more-horizontal",
	});
}

export default Component;
