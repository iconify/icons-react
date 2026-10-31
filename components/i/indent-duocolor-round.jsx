import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g03sssbsy.css';
import '../../css/i/i3xzrim4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="g03sssbsy"/><path class="i3xzrim4g"/></g>`,
		"fallback": "coolicons:indent-duocolor-round",
	});
}

export default Component;
