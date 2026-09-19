import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tvqbcu7ue.css';
import '../../css/w/w7urqpxve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tvqbcu7ue"/><path class="w7urqpxve"/></g>`,
		"fallback": "feather:download-cloud",
	});
}

export default Component;
