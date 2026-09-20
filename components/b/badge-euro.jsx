import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dtub6__pa.css';
import '../../css/c/cdbo8jy2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dtub6__pa"/><path class="cdbo8jy2l"/></g>`,
		"fallback": "vadivam:badge-euro",
	});
}

export default Component;
