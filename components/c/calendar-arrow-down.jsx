import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qyr7hn1ed.css';
import '../../css/u/u0bla4xmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qyr7hn1ed"/><path class="u0bla4xmr"/></g>`,
		"fallback": "lucide:calendar-arrow-down",
	});
}

export default Component;
