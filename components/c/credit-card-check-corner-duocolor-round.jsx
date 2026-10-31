import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/ok8l_-wct.css';
import '../../css/x/xw83m5bno.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ok8l_-wct"/><path class="xw83m5bno"/></g>`,
		"fallback": "coolicons:credit-card-check-corner-duocolor-round",
	});
}

export default Component;
