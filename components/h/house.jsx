import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hrmpu6b8h.css';
import '../../css/k/k7z2ej50w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hrmpu6b8h"/><path class="k7z2ej50w"/></g>`,
		"fallback": "vadivam:house",
	});
}

export default Component;
