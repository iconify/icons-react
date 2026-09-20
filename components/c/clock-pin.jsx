import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fmqne92pl.css';
import '../../css/w/w9s65qlif.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fmqne92pl"/><path class="w9s65qlif"/></g>`,
		"fallback": "tabler:clock-pin",
	});
}

export default Component;
