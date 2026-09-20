import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/flismrr_i.css';
import '../../css/t/tdq7zrbmv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="flismrr_i"/><path class="tdq7zrbmv"/></g>`,
		"fallback": "vadivam:circle-fading-arrow-up",
	});
}

export default Component;
