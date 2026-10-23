import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d-rwv3f8c.css';
import '../../css/h/h4x1m2bsp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="d-rwv3f8c"/><path class="h4x1m2bsp"/></g>`,
		"fallback": "vadivam:door-stairwell",
	});
}

export default Component;
