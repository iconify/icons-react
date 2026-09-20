import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n-me-oute.css';
import '../../css/k/kmm7tnz0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="n-me-oute"/><path class="kmm7tnz0f"/></g>`,
		"fallback": "tabler:devices-cancel",
	});
}

export default Component;
