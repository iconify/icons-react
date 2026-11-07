import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u1o2x4bhi.css';
import '../../css/f/fe87wcc8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="u1o2x4bhi"/><path class="fe87wcc8c"/></g>`,
		"fallback": "vadivam:file-database",
	});
}

export default Component;
