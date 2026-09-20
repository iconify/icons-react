import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x6637lbpk.css';
import '../../css/f/f-yglin0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path clip-rule="evenodd" class="x6637lbpk"/><path class="f-yglin0j"/></g>`,
		"fallback": "keyline-icons:image-arrow-right-fill",
	});
}

export default Component;
