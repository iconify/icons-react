import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v1hv90bjp.css';
import '../../css/d/d537sub7e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="v1hv90bjp"/><path class="d537sub7e"/></g>`,
		"fallback": "keyline-icons:chart-scatter-3d-two-tone",
	});
}

export default Component;
