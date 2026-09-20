import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e_tmkojhy.css';
import '../../css/w/w6gl6bbba.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="e_tmkojhy"/><path class="w6gl6bbba"/></g>`,
		"fallback": "tabler:credit-card-hand",
	});
}

export default Component;
