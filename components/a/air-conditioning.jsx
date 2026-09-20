import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hnwf05bfp.css';
import '../../css/r/rkc3di_xf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hnwf05bfp"/><path class="rkc3di_xf"/></g>`,
		"fallback": "tabler:air-conditioning",
	});
}

export default Component;
