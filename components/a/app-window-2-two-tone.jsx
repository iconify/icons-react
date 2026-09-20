import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/az74cdzje.css';
import '../../css/e/e_14kn8by.css';
import '../../css/u/unky6y77u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="az74cdzje"/><path class="e_14kn8by"/><path class="unky6y77u"/></g>`,
		"fallback": "keyline-icons:app-window-2-two-tone",
	});
}

export default Component;
