import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fp-kmxbgc.css';
import '../../css/w/wlu4pccwr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fp-kmxbgc"/><path class="wlu4pccwr"/></g>`,
		"fallback": "tabler:hearts",
	});
}

export default Component;
