import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/woutedbwf.css';
import '../../css/s/s_jwn-bvh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="woutedbwf"/><path class="s_jwn-bvh"/></g>`,
		"fallback": "vadivam:ear",
	});
}

export default Component;
