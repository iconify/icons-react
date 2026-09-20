import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ykq394h_f.css';
import '../../css/i/ik99g19jo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ykq394h_f"/><path class="ik99g19jo"/></g>`,
		"fallback": "majesticons:globe-grid",
	});
}

export default Component;
