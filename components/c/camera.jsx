import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fblvpxkay.css';
import '../../css/f/fr_tmn9fp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fblvpxkay"/><circle class="fr_tmn9fp"/></g>`,
		"fallback": "lucide:camera",
	});
}

export default Component;
