import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wy62lmblz.css';
import '../../css/t/tu_uqbbcs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wy62lmblz"/><path class="tu_uqbbcs"/></g>`,
		"fallback": "keyline-icons:audio-lines-search-two-tone",
	});
}

export default Component;
