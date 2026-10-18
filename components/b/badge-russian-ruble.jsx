import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rjcmxr5np.css';
import '../../css/c/c_9kcibbk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="rjcmxr5np"/><path class="c_9kcibbk"/></g>`,
		"fallback": "vadivam:badge-russian-ruble",
	});
}

export default Component;
