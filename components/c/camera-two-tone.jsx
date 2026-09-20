import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/ubjleoo8i.css';
import '../../css/d/dasfx2hmj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ubjleoo8i"/><path class="dasfx2hmj"/></g>`,
		"fallback": "keyline-icons:camera-two-tone",
	});
}

export default Component;
