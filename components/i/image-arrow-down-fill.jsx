import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x6637lbpk.css';
import '../../css/w/w12ihe0ad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path clip-rule="evenodd" class="x6637lbpk"/><path class="w12ihe0ad"/></g>`,
		"fallback": "keyline-icons:image-arrow-down-fill",
	});
}

export default Component;
