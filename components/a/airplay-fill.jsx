import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uylrcubvl.css';
import '../../css/j/jyim-db-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="uylrcubvl"/><path clip-rule="evenodd" class="jyim-db-p"/></g>`,
		"fallback": "keyline-icons:airplay-fill",
	});
}

export default Component;
