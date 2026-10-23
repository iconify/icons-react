import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p2tevlb2z.css';
import '../../css/b/b8cr_bbou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="p2tevlb2z"/><path class="b8cr_bbou"/></g>`,
		"fallback": "vadivam:calendar-range",
	});
}

export default Component;
