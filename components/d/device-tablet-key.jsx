import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h58te9bnz.css';
import '../../css/r/rxgk914hi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="h58te9bnz"/><path class="rxgk914hi"/></g>`,
		"fallback": "tabler:device-tablet-key",
	});
}

export default Component;
