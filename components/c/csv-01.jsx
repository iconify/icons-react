import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jdx2vrbay.css';
import '../../css/f/fva-rxset.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="jdx2vrbay"/><path class="fva-rxset"/></g>`,
		"fallback": "hugeicons:csv-01",
	});
}

export default Component;
