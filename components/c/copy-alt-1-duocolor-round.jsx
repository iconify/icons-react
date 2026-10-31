import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xahc66bxt.css';
import '../../css/p/psgwxtbcu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xahc66bxt"/><path class="psgwxtbcu"/></g>`,
		"fallback": "coolicons:copy-alt-1-duocolor-round",
	});
}

export default Component;
