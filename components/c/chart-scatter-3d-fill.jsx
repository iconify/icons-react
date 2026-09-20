import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wwi8mac-d.css';
import '../../css/d/d537sub7e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wwi8mac-d"/><path class="d537sub7e"/></g>`,
		"fallback": "keyline-icons:chart-scatter-3d-fill",
	});
}

export default Component;
