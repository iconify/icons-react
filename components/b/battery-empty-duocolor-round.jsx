import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nmg30hbye.css';
import '../../css/l/l4xg1-cxl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nmg30hbye"/><path class="l4xg1-cxl"/></g>`,
		"fallback": "coolicons:battery-empty-duocolor-round",
	});
}

export default Component;
