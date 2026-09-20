import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qccp1j4ha.css';
import '../../css/d/dekzl1b8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qccp1j4ha"/><path class="dekzl1b8b"/></g>`,
		"fallback": "tabler:explicit",
	});
}

export default Component;
