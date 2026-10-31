import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/ztx3s-f0k.css';
import '../../css/e/eomviva1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ztx3s-f0k"/><path class="eomviva1t"/></g>`,
		"fallback": "coolicons:id-badge-duocolor-round",
	});
}

export default Component;
