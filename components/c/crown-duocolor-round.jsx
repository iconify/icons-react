import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mnafb_b5y.css';
import '../../css/g/gg5o0ubru.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mnafb_b5y"/><path class="gg5o0ubru"/></g>`,
		"fallback": "coolicons:crown-duocolor-round",
	});
}

export default Component;
