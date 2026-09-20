import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/az2agubvb.css';
import '../../css/c/cv2qg2blg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="az2agubvb"/><path class="cv2qg2blg"/></g>`,
		"fallback": "streamline-flex-color:cloud-warning",
	});
}

export default Component;
