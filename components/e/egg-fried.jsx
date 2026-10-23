import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n57kqccrf.css';
import '../../css/k/k2r8wyr3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="n57kqccrf"/><path class="k2r8wyr3v"/></g>`,
		"fallback": "vadivam:egg-fried",
	});
}

export default Component;
