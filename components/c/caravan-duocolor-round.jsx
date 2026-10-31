import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t94gj4ktc.css';
import '../../css/d/dw1-2hblb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="t94gj4ktc"/><path class="dw1-2hblb"/></g>`,
		"fallback": "coolicons:caravan-duocolor-round",
	});
}

export default Component;
