import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sk6uw-bym.css';
import '../../css/i/i8ptlcpac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="sk6uw-bym"/><path class="i8ptlcpac"/></g>`,
		"fallback": "coolicons:frame-duocolor-round",
	});
}

export default Component;
