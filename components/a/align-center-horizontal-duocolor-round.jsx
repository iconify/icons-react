import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/now253bdc.css';
import '../../css/s/sybrgdcsx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="now253bdc"/><path class="sybrgdcsx"/></g>`,
		"fallback": "coolicons:align-center-horizontal-duocolor-round",
	});
}

export default Component;
