import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/prtir0bzi.css';
import '../../css/u/uxbr16b2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="prtir0bzi"/><path class="uxbr16b2i"/></g>`,
		"fallback": "vadivam:briefcase-business",
	});
}

export default Component;
