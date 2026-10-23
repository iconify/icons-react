import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pd--y1-ct.css';
import '../../css/b/bwcs2jjze.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pd--y1-ct"/><path class="bwcs2jjze"/></g>`,
		"fallback": "vadivam:clock-arrow-up",
	});
}

export default Component;
