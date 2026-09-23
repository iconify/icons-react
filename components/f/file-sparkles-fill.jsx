import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/ha_-kxwol.css';
import '../../css/d/d0dmm8bpa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ha_-kxwol"/><path class="d0dmm8bpa"/></g>`,
		"fallback": "keyline-icons:file-sparkles-fill",
	});
}

export default Component;
