import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p9dxmcbhl.css';
import '../../css/p/p4-k1v6ee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="p9dxmcbhl"/><path class="p4-k1v6ee"/></g>`,
		"fallback": "coolicons:beer-duocolor-round",
	});
}

export default Component;
