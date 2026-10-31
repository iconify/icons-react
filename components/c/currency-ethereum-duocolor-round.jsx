import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j8-lmv0qm.css';
import '../../css/s/slrrf6ejp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="j8-lmv0qm"/><path class="slrrf6ejp"/></g>`,
		"fallback": "coolicons:currency-ethereum-duocolor-round",
	});
}

export default Component;
