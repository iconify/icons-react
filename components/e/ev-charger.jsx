import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gwcqp7brd.css';
import '../../css/r/rzc_7sb-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gwcqp7brd"/><path class="rzc_7sb-l"/></g>`,
		"fallback": "lucide:ev-charger",
	});
}

export default Component;
