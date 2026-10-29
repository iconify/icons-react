import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zkeuekq2l.css';
import '../../css/s/sf2e0acnc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zkeuekq2l"/><path class="sf2e0acnc"/></g>`,
		"fallback": "vadivam:armchair",
	});
}

export default Component;
