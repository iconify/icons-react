import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cv2gmabgi.css';
import '../../css/c/c-f4x5bus.css';
import '../../css/f/fsnrxv-br.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cv2gmabgi"/><path class="c-f4x5bus"/><path class="fsnrxv-br"/></g>`,
		"fallback": "andrsrxn:heart-break",
	});
}

export default Component;
