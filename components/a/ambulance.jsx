import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f00vp2buw.css';
import '../../css/b/bv2a3_bic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="f00vp2buw"/><path class="bv2a3_bic"/></g>`,
		"fallback": "vadivam:ambulance",
	});
}

export default Component;
