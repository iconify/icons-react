import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dhy5bs5ug.css';
import '../../css/l/l8kswp8ey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dhy5bs5ug"/><path class="l8kswp8ey"/></g>`,
		"fallback": "lucide:ham",
	});
}

export default Component;
