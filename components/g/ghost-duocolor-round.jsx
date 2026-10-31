import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r31-m1inr.css';
import '../../css/k/kg5_lfr6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="r31-m1inr"/><path class="kg5_lfr6o"/></g>`,
		"fallback": "coolicons:ghost-duocolor-round",
	});
}

export default Component;
